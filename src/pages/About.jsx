import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2, Info } from "lucide-react";
import GoogleAd from '../components/ads/GoogleAd';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Top Ad */}
      <GoogleAd slot="2233445566" format="horizontal" />
      
      <Card className="overflow-hidden shadow-lg mt-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white">
          <div className="flex items-center gap-4">
            <Info className="w-10 h-10" />
            <CardTitle className="text-2xl font-bold">About Our Halls</CardTitle>
          </div>
        </div>
        <CardContent className="prose p-6">
          <div className="flex justify-center mb-6">
            <Building2 className="w-24 h-24 text-indigo-200" />
          </div>
          <p className="text-gray-700">
            Welcome to our Halls Information System. We provide comprehensive information about various halls
            available for events, conferences, and special occasions. Our platform allows you to explore
            different venues, view their facilities, and make informed decisions for your events.
          </p>
          
          <p className="text-gray-700 mt-6">
            Each hall in our database has been carefully documented with detailed information, high-quality
            images, and genuine recommendations from previous users. We strive to provide accurate and
            up-to-date information to help you find the perfect venue for your needs.
          </p>
          
          <p className="text-gray-700 mt-6">
            Our mission is to simplify the process of finding and booking venues for all types of events,
            from small business meetings to large-scale conferences and celebrations. We believe that
            having access to reliable information about venues can make event planning much easier and
            more efficient.
          </p>
          
          <p className="text-gray-700 mt-6">
            If you have any questions or suggestions about our platform, please feel free to contact us.
            We are constantly working to improve our service and would love to hear your feedback.
          </p>

          <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-100">
            <h3 className="font-semibold text-purple-700 mb-2">Contact Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span><strong>Country:</strong> Israel</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span><strong>Email:</strong> <a href="mailto:urielsa@elementostage.com">urielsa@elementostage.com</a></span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      
      {/* Bottom Ad */}
      <GoogleAd slot="4455667788" format="horizontal" />
    </div>
  );
}