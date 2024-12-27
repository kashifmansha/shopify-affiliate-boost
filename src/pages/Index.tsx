import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  const features = [
    {
      title: "Start for Just $1/month",
      description: "Access premium features at an unbeatable price for 3 full months"
    },
    {
      title: "No Risk Trial",
      description: "Experience Shopify's full potential with minimal investment"
    },
    {
      title: "24/7 Support",
      description: "Get expert help whenever you need it"
    }
  ];

  const faqs = [
    {
      question: "What's included in the $1/month plan?",
      answer: "The $1/month plan includes all essential Shopify features including online store, payment processing, shipping tools, and marketing features for 3 months."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your Shopify subscription at any time with no penalties or hidden fees."
    },
    {
      question: "What happens after 3 months?",
      answer: "After the 3-month promotional period, your plan will convert to regular pricing. You'll be notified well in advance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Shopify Special Offer: Start Your Online Store for $1/Month | Limited Time</title>
        <meta name="description" content="Launch your dream online store with Shopify's special $1/month offer. Get full access to premium features for 3 months. Limited time offer!" />
        <link rel="canonical" href="https://yourdomain.com" />
        <meta property="og:title" content="Shopify Special Offer: Start Your Online Store for $1/Month" />
        <meta property="og:description" content="Launch your dream online store with Shopify's special $1/month offer. Get full access to premium features for 3 months. Limited time offer!" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Offer",
              "name": "Shopify $1/Month Special Offer",
              "description": "Start your online store with Shopify for just $1/month for 3 months",
              "price": "1.00",
              "priceCurrency": "USD",
              "duration": "P3M",
              "seller": {
                "@type": "Organization",
                "name": "Shopify"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#004C3F] text-white py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                Launch Your Dream Store for Just $1/Month
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
                Start your journey with Shopify's most powerful features at an unbeatable price. Limited time offer!
              </p>
              <Button size="lg" className="bg-[#96BF48] hover:bg-[#7EA039] text-white px-8 py-6 text-lg rounded-full animate-scale-in">
                Start Your 3-Month Trial Now <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Shopify?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <CheckCircle2 className="h-12 w-12 text-[#004C3F] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#004C3F] text-white py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your E-commerce Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join millions of successful businesses on Shopify today.
            </p>
            <Button size="lg" className="bg-[#96BF48] hover:bg-[#7EA039] text-white px-8 py-6 text-lg rounded-full">
              Get Started for $1/Month <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;