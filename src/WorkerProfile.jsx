import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import logo from './assets/Logo.png';

const WorkerProfile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Replace with actual API endpoint
      const response = await axios.post('/api/worker/login', {
        email: loginForm.email,
        password: loginForm.password
      });
      
      setWorker(response.data.worker);
      setIsAuthenticated(true);
      toast.success('تم تسجيل الدخول بنجاح');
    } catch (error) {
      console.error('Login error:', error);
      
      // Mock login for testing - remove in production
      if (loginForm.email === 'worker@example.com' && loginForm.password === 'worker123') {
        const mockWorker = {
          id: 1,
          name: 'محمد الأمين',
          phone: '0555123456',
          email: 'worker@example.com',
          position: 'سائق',
          experience: 'خبرة 5 سنوات في النقل',
          message: 'أرغب في الانضمام لفريقكم',
          isAccepted: true,
          createdAt: '2025-01-15T09:15:00Z'
        };
        setWorker(mockWorker);
        setIsAuthenticated(true);
        toast.success('تم تسجيل الدخول بنجاح');
      } else {
        toast.error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setWorker(null);
    setLoginForm({ email: '', password: '' });
    toast.success('تم تسجيل الخروج بنجاح');
  };

  const fetchWorkerProfile = async () => {
    try {
      // Replace with actual API endpoint
      const response = await axios.get(`/api/worker/profile/${worker.id}`);
      setWorker(response.data.worker);
    } catch (error) {
      console.error('Error fetching worker profile:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && worker) {
      fetchWorkerProfile();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <Toaster position="top-center" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <img src={logo} alt="KRIXO" className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">ملف العامل</h1>
            <p className="text-gray-600">تسجيل دخول العامل</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6" dir="rtl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أدخل كلمة المرور"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>للاختبار: worker@example.com / worker123</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <img src={logo} alt="KRIXO" className="w-10 h-10" />
              <h1 className="text-xl font-bold text-gray-900">ملف العامل - KRIXO</h1>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              تسجيل الخروج
            </button>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">
                  {worker?.name?.charAt(0)}
                </span>
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-bold">{worker?.name}</h2>
                <p className="text-blue-100">{worker?.position}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    worker?.isAccepted === true ? 'bg-green-500 text-white' :
                    worker?.isAccepted === false ? 'bg-red-500 text-white' :
                    'bg-yellow-500 text-white'
                  }`}>
                    {worker?.isAccepted === true ? 'مقبول' :
                     worker?.isAccepted === false ? 'مرفوض' : 'في الانتظار'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  المعلومات الشخصية
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">الاسم الكامل</label>
                    <p className="mt-1 text-lg text-gray-900">{worker?.name}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600">البريد الإلكتروني</label>
                    <p className="mt-1 text-lg text-gray-900">{worker?.email}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600">رقم الهاتف</label>
                    <p className="mt-1 text-lg text-gray-900">{worker?.phone}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600">المنصب المطلوب</label>
                    <p className="mt-1 text-lg text-gray-900">{worker?.position}</p>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  المعلومات المهنية
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">الخبرة المهنية</label>
                    <p className="mt-1 text-gray-900 bg-gray-50 p-4 rounded-lg">
                      {worker?.experience}
                    </p>
                  </div>
                  
                  {worker?.message && (
                    <div>
                      <label className="block text-sm font-medium text-gray-600">رسالة إضافية</label>
                      <p className="mt-1 text-gray-900 bg-gray-50 p-4 rounded-lg">
                        {worker?.message}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600">تاريخ التقديم</label>
                    <p className="mt-1 text-lg text-gray-900">
                      {new Date(worker?.createdAt).toLocaleDateString('ar-SA')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Information */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">حالة الطلب</h3>
              
              {worker?.isAccepted === true && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">تم قبول طلبك!</h4>
                      <p className="text-green-700">
                        مرحباً بك في فريق KRIXO. سيتم التواصل معك قريباً لبدء العمل.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {worker?.isAccepted === false && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800">لم يتم قبول طلبك</h4>
                      <p className="text-red-700">
                        نعتذر، لم نتمكن من قبول طلبك في الوقت الحالي. يمكنك التقديم مرة أخرى لاحقاً.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {worker?.isAccepted === null && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800">طلبك قيد المراجعة</h4>
                      <p className="text-yellow-700">
                        نحن نراجع طلبك حالياً. سيتم إشعارك بالنتيجة قريباً.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default WorkerProfile;