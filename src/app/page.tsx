"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="animatedAurora"
      cardStyle="glass-flat"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766065502566-ywlittch.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="Brew Haven"
          button={{
            text: "Order Now",
            href: "#contact"
          }}
          className="border-b border-accent/20"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Brew Haven"
          description="Discover the art of specialty coffee crafted with passion and precision. Your perfect cup awaits."
          buttons={[
            {
              text: "View Menu",
              href: "#featured-menu"
            },
            {
              text: "Visit Us",
              href: "#contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766065504110-7wbmew1q.jpg"
          imageAlt="Cozy coffee shop interior with warm lighting"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Brew Haven, we believe that great coffee is more than just a beverage. It's a ritual, a moment of connection, and a commitment to quality. Since 2018, we've been sourcing the finest beans from sustainable farms worldwide and roasting them to perfection in our shop."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="featured-menu" data-section="featured-menu">
        <ProductCardTwo
          title="Signature Menu"
          description="Explore our carefully curated selection of specialty coffee drinks"
          tag="Featured"
          products={[
            {
              id: "1",
              brand: "Brew Haven",
              name: "Classic Espresso",
              price: "$3.50",
              rating: 5,
              reviewCount: "234",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766065505526-hgq9kubh.jpg",
              imageAlt: "Classic espresso in small cup"
            },
            {
              id: "2",
              brand: "Brew Haven",
              name: "Silky Cappuccino",
              price: "$4.75",
              rating: 5,
              reviewCount: "567",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766065507027-y7ygbvdc.jpg",
              imageAlt: "Cappuccino with beautiful latte art"
            },
            {
              id: "3",
              brand: "Brew Haven",
              name: "Cold Brew Blend",
              price: "$5.00",
              rating: 5,
              reviewCount: "892",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766065508404-me6s1h9p.jpg",
              imageAlt: "Refreshing iced cold brew coffee"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766065509642-b89v6055.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766065510747-w4pm1eme.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766065511675-x0rnpgxp.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766065512608-vyx3imml.jpg"
            }
          ]}
          cardTitle="Loved by thousands of coffee enthusiasts across the city"
          cardTag="Customer Love"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Visit Our Shop"
          ctaDescription="Come experience the warmth of great coffee and community. We're open daily from 7 AM to 8 PM."
          ctaButton={{
            text: "Get Directions",
            href: "#"
          }}
          ctaIcon={MapPin}
          faqs={[
            {
              id: "1",
              title: "Do you offer WiFi?",
              content: "Yes, we offer complimentary high-speed WiFi for all our customers. Perfect for working or studying."
            },
            {
              id: "2",
              title: "Can I order online for pickup?",
              content: "Absolutely! Order ahead through our mobile app or website and pick up your order within 15 minutes."
            },
            {
              id: "3",
              title: "Do you have decaf options?",
              content: "We have a full range of decaffeinated coffee options available for all our signature drinks."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Brew Haven"
          logoAlt="Brew Haven Footer Logo"
        />
      </div>
    </ThemeProvider>
  );
}