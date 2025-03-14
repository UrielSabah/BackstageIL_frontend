import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import GoogleAd from '../components/ads/GoogleAd';

export default function Donations() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Top Ad */}
      <GoogleAd slot="5566778899" format="horizontal" />
      
      <Card className="overflow-hidden shadow-lg mt-6">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 text-white">
          <div className="flex items-center gap-4">
            <Heart className="w-10 h-10 fill-white" />
            <CardTitle className="text-2xl font-bold">Support Our Project</CardTitle>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-center my-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
              <Heart className="w-12 h-12 text-pink-500 fill-pink-200" />
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            BackstageIL is dedicated to providing a modern, user-friendly platform that centralizes backstage
            information for music halls across Israel. Your support will help us continue developing innovative
            features and enhancing the user experience for event organizers, musicians, and venue managers.
          </p>
          
          <p className="text-gray-700 mb-4">
           Your contribution will go directly towards platform improvements, hosting costs, and future integrations
            with advanced tools and services to make BackstageIL the ultimate resource for event logistics.
          </p>

          <p className="text-gray-700 mb-4">
          To support us, please visit our donation page:
          </p>

          <div className="text-center mb-4">
            <a 
              href="https://ko-fi.com/backstageil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Donate via Ko-fi
            </a>
          </div>

          <p className="text-gray-700 mb-8">
            If you find our service valuable, please consider making a donation. Every contribution,
            no matter how small, helps us maintain and enhance this platform for everyone's benefit.
          </p>
          
          <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-100">
            <h3 className="font-semibold text-purple-700 mb-2">How Your Donation Helps</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>Server maintenance and hosting costs</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>Data collection and verification</span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4 text-center text-gray-500 text-sm">
          All donations are securely processed and go directly toward maintaining our services.
        </CardFooter>
      </Card>
      
      {/* Bottom Ad */}
      <GoogleAd slot="7788990011" format="horizontal" />
    </div>
  );
}