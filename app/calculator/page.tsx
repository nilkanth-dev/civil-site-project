import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CostCalculator from '@/components/CostCalculator';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function CalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <WhatsAppButton />

            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Construction Cost Calculator</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Plan your budget effectively with our instant estimator. Select your requirements and get a realistic price range in seconds.
                        </p>
                    </div>

                    <CostCalculator />

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600 font-bold text-2xl">1</div>
                            <h3 className="text-xl font-bold mb-3">Input Area</h3>
                            <p className="text-gray-600">Enter the total built-up area of your proposed project in square feet.</p>
                        </div>
                        <div className="p-8">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600 font-bold text-2xl">2</div>
                            <h3 className="text-xl font-bold mb-3">Choose Quality</h3>
                            <p className="text-gray-600">Select from basic, premium, or luxury finishes based on your style and budget.</p>
                        </div>
                        <div className="p-8">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600 font-bold text-2xl">3</div>
                            <h3 className="text-xl font-bold mb-3">View Estimate</h3>
                            <p className="text-gray-600">Get an instant breakdown of the total estimated cost and project duration.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
