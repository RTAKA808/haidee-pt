import Contact from "@/components/contact";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-">
      <div className="w-full max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your healing journey? Fill out the form below and I&apos;ll contact you 
            within 1-3 business days to schedule your personalized physical therapy session.
          </p>
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">What to Expect:</h3>
            <ul className="text-left text-blue-800 space-y-2">
              <li>• <strong>Initial Consultation:</strong> We&apos;ll discuss your goals and concerns</li>
              <li>• <strong>Assessment:</strong> Comprehensive evaluation of your condition</li>
              <li>• <strong>Personalized Plan:</strong> Treatment plan tailored to your needs</li>
              <li>• <strong>Ongoing Support:</strong> Regular check-ins and plan adjustments</li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export const metadata = {
  title: "Book an Appointment - Haidee PT",
  description: "Schedule your personalized physical therapy session with Haidee. Get started on your healing journey today.",
};
