import { Link } from "react-router-dom";
import img1 from "../assets/herovot.png";
import img2 from "../assets/jorimg.jpg";
import img3 from "../assets/voting.jpg";
import CountdownTimer from "../comonamt/timer";
import ElectoralDistricts from "../comonamt/ElectoralDistricts";
import ChatbotComponent from "../chatbooks/ChatbotComponent";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Building image */}
      <div className="mb-8 h-screen relative">
        <CountdownTimer />
        <img
          src={img1}
          alt="Election Building"
          className="w-full h-screen object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Jordan map and welcome message */}
      <div className="relative h-screen flex items-center justify-center mb-8">
        {/* Jordan map as background */}
        <div className="absolute inset-0">
          <img
            src={img2}
            alt="Jordan Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay for text */}
        <div className="absolute bottom-0 right-0 p-6 text-black bg-opacity-75 bg-white w-1/2 text-right rounded-lg shadow-lg">
          <h2 className="text-3xl mb-4 text-center font-semibold">
            مرحبا :عبدالله السراحين
          </h2>
          <p className="text-lg text-center">
            شكرا لتسجيل دخولك إلى موقعنا. نحن هنا لمساعدتك في عملية الانتخابات.
            إذا كنت ترغب في استكشاف المزيد عن الانتخابات القادمة، المرشحين،
            والمواضيع الهامة
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 mt-10">من نحن</h1>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-10">
        <div className="md:w-1/2 text-right mb-4 md:mb-0">
          <p className="text-lg leading-relaxed">
            الانتخابات هي عملية الموظفين لاختيار الأشخاص الذين سيمثلونهم في
            المناصب السياسية. وهي آلية من آليات الديمقراطية التمثيلية. حيث تعمل
            على تجسيد مفهوم الانتخابات الحرة تعتبر من أهم ركائز هذه العملية
            الديمقراطية.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={img3}
            alt="Ballot being placed in voting box"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Electoral districts */}
      <div className="mb-8 mt-10">
        <ElectoralDistricts />
      </div>

      {/* Candidate announcements */}
      <h2 className="text-3xl mb-4 text-center font-semibold">
        الإعلانات الجديدة
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="border p-4 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <button className="bg-red-600 text-white px-4 py-2 mt-2 w-full rounded-lg transition-transform hover:bg-red-700">
              قائمة نمو
            </button>
            <img
              src={img2} // استخدام الصورة المستوردة
              alt={`Candidate ${index}`}
              className="w-full h-32 object-cover mb-2 rounded-lg"
            />
            <h3 className="font-bold text-lg mb-2">اسم المرشح</h3>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="border p-4 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <img
              src={img2} // استخدام الصورة المستوردة
              alt={`Candidate ${index}`}
              className="w-full h-32 object-cover mb-2 rounded-lg"
            />
            <h3 className="font-bold text-lg mb-2">اسم المرشح</h3>
          </div>
        ))}
      </div>
      <div className="mb-8 text-right " dir="rtl">
        <h2 className="text-3xl mb-4 text-center font-semibold  mt-10">
          تثقيف الناخبين
        </h2>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="mb-4">تعرف على حقوقك وواجباتك كناخب:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">كيفية التحقق من تسجيلك كناخب</li>
            <li className="mb-2">الوثائق المطلوبة يوم الانتخاب</li>
            <li className="mb-2">خطوات عملية التصويت</li>
          </ul>
          <Link
            to="/"
            className="mt-4 inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            اقرأ المزيد
          </Link>
        </div>
      </div>

      <div className="mb-8" dir="rtl">
        <h2 className="text-3xl mb-4 text-center font-semibold">
          تحديثات مباشرة
        </h2>
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-lg font-semibold mb-2">نسبة المشاركة الحالية:</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <p className="mt-2">45% من الناخبين المسجلين قد أدلوا بأصواتهم</p>
        </div>
      </div>

      <div className="mb-8" dir="rtl">
        <h2 className="text-3xl mb-4 text-center font-semibold">
          الأسئلة الشائعة
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "متى موعد الانتخابات القادمة؟",
              a: "ستجرى الانتخابات في [التاريخ].",
            },
            {
              q: "كيف يمكنني التحقق من تسجيلي كناخب؟",
              a: "يمكنك التحقق عبر [الرابط] أو زيارة أقرب مركز تسجيل.",
            },
            {
              q: "ما هي الوثائق المطلوبة للتصويت؟",
              a: "تحتاج إلى بطاقة الهوية الوطنية سارية المفعول.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <ChatbotComponent />
    </div>
  );
};

export default Home;
