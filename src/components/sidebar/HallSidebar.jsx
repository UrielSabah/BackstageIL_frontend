import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Loader2, Building2, AlertTriangle } from "lucide-react";
import GoogleAd from '../ads/GoogleAd';

export default function HallSidebar({ 
  halls, 
  selectedHall, 
  setSelectedHall, 
  view, 
  setView, 
  loading, 
  error 
}) {
  return (
    <div className="sidebar">
      <div className="space-y-6">
        <div className="sidebar-header">
          <Building2 className="sidebar-icon" />
          <h2 className="sidebar-title">Hall Explorer</h2>
        </div>
        
        <div>
          <Label className="label-color">Select Hall</Label>
          {error ? (
            <div className="mt-2 text-red-500 flex items-center gap-2 text-sm">
              <AlertTriangle className="h-4 w-4" />
              {error}
            </div>
          ) : (
            <div>
              <Select value={selectedHall} onValueChange={setSelectedHall}>
                <SelectTrigger 
                  className="mt-1 border-indigo-200 focus:ring-indigo-500 bg-white text-gray-900 font-medium"
                  style={{backgroundColor: "white", color: "#111827"}}
                >
                  <SelectValue placeholder="Choose a hall" />
                </SelectTrigger>
                <SelectContent 
                  style={{backgroundColor: "white", color: "#111827"}}
                >
                  {halls.map((hall) => (
                    <SelectItem 
                      key={hall.id} 
                      value={hall.id}
                      style={{backgroundColor: "white", color: "#111827"}}
                    >
                      {hall.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          {loading && halls.length === 0 && (
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <Loader2 className="h-3 w-3 animate-spin mr-2" />
              Loading halls...
            </div>
          )}
        </div>

        <div>
          <Label className="label-color">View Options</Label>
          <RadioGroup value={view} onValueChange={setView} className="mt-2 space-y-2">
            <div className="radio-option">
              <RadioGroupItem value="info" id="info" className="text-indigo-600" />
              <Label htmlFor="info" className="ml-2 text-gray-800">Hall Information</Label>
            </div>
            <div className="radio-option">
              <RadioGroupItem value="pictures" id="pictures" className="text-indigo-600" />
              <Label htmlFor="pictures" className="ml-2 text-gray-800">Hall Pictures</Label>
            </div>
            <div className="radio-option">
              <RadioGroupItem value="recommendations" id="recommendations" className="text-indigo-600" />
              <Label htmlFor="recommendations" className="ml-2 text-gray-800">Hall Recommendations</Label>
            </div>
          </RadioGroup>
        </div>
        
        {/* Sidebar Ad */}
        <GoogleAd slot="1234567890" format="rectangle" />
      </div>
    </div>
  );
}