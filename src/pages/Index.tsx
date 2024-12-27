import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  const features = [
    {
      title: "Complete E-commerce Suite",
      description: "Access to Shopify's full platform including online store, payment processing, and shipping tools. Start selling immediately with professional features that grow with your business."
    },
    {
      title: "Professional Themes",
      description: "Choose from premium themes to create a stunning store without design experience. Each theme is mobile-responsive and optimized for conversions."
    },
    {
      title: "Mobile Commerce Ready",
      description: "Your store automatically works on all devices with mobile-optimized checkout. Tap into the growing mobile shopping market with a seamless experience."
    },
    {
      title: "Marketing Tools",
      description: "Built-in SEO tools, social media integration, and email marketing capabilities help you reach more customers. Create targeted campaigns and track their success."
    },
    {
      title: "24/7 Support",
      description: "Access to Shopify's award-winning customer support team anytime. Get expert help via chat, email, or phone whenever you need it."
    },
    {
      title: "Secure & Reliable",
      description: "SSL certificate included with reliable hosting and automatic updates. Your customers' data is protected with industry-leading security measures."
    }
  ];

  const faqs = [
    {
      question: "What's included in the $1/month plan?",
      answer: "The $1/month plan includes all essential Shopify features: online store, unlimited product listings, 24/7 support, secure checkout, abandoned cart recovery, and marketing tools. This special pricing is valid for 3 months, making it the perfect opportunity to start your e-commerce journey."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your Shopify subscription at any time with no penalties or hidden fees. You'll only be charged for the time you've used the service. We believe in transparency and flexibility for our merchants."
    },
    {
      question: "What happens after 3 months?",
      answer: "After the 3-month promotional period, your plan will convert to regular pricing. You'll be notified well in advance and can choose to continue or cancel your subscription. This gives you plenty of time to evaluate the platform's value for your business."
    },
    {
      question: "Do I need technical skills to use Shopify?",
      answer: "No technical skills required! Shopify is designed to be user-friendly with drag-and-drop builders, pre-made templates, and intuitive tools. Our 24/7 support team is always ready to help you build and grow your online store."
    },
    {
      question: "Can I sell on social media with this plan?",
      answer: "Yes! The plan includes integration with major social media platforms like Facebook, Instagram, and TikTok, allowing you to sell directly through social channels. Expand your reach and tap into social commerce with built-in tools."
    }
  ];

  const affiliateLink = "https://shopify.pxf.io/Ry4ke2";

  return (
    <>
      <Helmet>
        <title>Exclusive Shopify Offer: Start Your Online Store for $1/Month | 3 Months Special</title>
        <meta name="description" content="Transform your business with Shopify's incredible $1/month offer. Get full access to premium features, 24/7 support, and powerful e-commerce tools for 3 months. Limited time offer!" />
        <link rel="canonical" href="https://yourdomain.com" />
        <meta property="og:title" content="Exclusive Shopify Offer: Start Your Online Store for $1/Month" />
        <meta property="og:description" content="Transform your business with Shopify's incredible $1/month offer. Get full access to premium features, 24/7 support, and powerful e-commerce tools for 3 months. Limited time offer!" />
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
        {/* Hero Section with Banner */}
        <section className="bg-[#004C3F] text-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
              SHOPIFY'S LATEST UPDATE: START YOUR DREAM STORE FOR JUST $1
            </h1>
            <img 
              src="/lovable-uploads/e2f791ea-3dc3-45ec-8fa5-8e72fdafb41b.png" 
              alt="Shopify $1 for 3 months special offer"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-xl mb-12"
            />
            <div className="text-center space-y-6">
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
                Transform your entrepreneurial dreams into reality with Shopify's most affordable offer ever. Get full access to premium features, world-class support, and powerful e-commerce tools for just $1/month for 3 months!
              </p>
              <Button 
                size="lg" 
                className="bg-[#96BF48] hover:bg-[#7EA039] text-white px-8 py-6 text-lg rounded-full animate-pulse"
                onClick={() => window.open(affiliateLink, '_blank')}
              >
                Launch Your Dream Store Now - Just $1/Month <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Shopify Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Shopify's $1 Plan?
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
              Frequently Asked Questions About Shopify's $1 Plan
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

        {/* Final CTA Section */}
        <section className="bg-[#004C3F] text-white py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Miss This Limited-Time Opportunity
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join millions of successful entrepreneurs who trust Shopify. Start your journey today with our exclusive $1/month offer!
            </p>
            <Button 
              size="lg" 
              className="bg-[#96BF48] hover:bg-[#7EA039] text-white px-8 py-6 text-lg rounded-full"
              onClick={() => window.open(affiliateLink, '_blank')}
            >
              Start Your Success Story for $1/Month <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;