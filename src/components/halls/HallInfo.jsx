import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Users, Phone, FileText, CheckSquare, AlertTriangle } from "lucide-react";

export default function HallInfo({ hallData }) {
  if (!hallData) return null;

  // Create an array of info rows based on available data
  const infoRows = [];
  
  if (hallData.location) {
    infoRows.push({ 
      label: 'Location', 
      value: hallData.location, 
      icon: <MapPin className="w-4 h-4 text-indigo-500" /> 
    });
  }
  
  if (hallData.capacity) {
    infoRows.push({ 
      label: 'Capacity', 
      value: typeof hallData.capacity === 'number' ? `${hallData.capacity} people` : hallData.capacity, 
      icon: <Users className="w-4 h-4 text-purple-500" /> 
    });
  }
  
  if (hallData.contact) {
    infoRows.push({ 
      label: 'Contact', 
      value: hallData.contact, 
      icon: <Phone className="w-4 h-4 text-indigo-500" /> 
    });
  }
  
  if (hallData.description) {
    infoRows.push({ 
      label: 'Description', 
      value: hallData.description, 
      icon: <FileText className="w-4 h-4 text-purple-500" /> 
    });
  }

  const renderFeatures = () => {
    if (!hallData.features || hallData.features.length === 0) {
      return (
        <div className="bg-indigo-50 p-4 rounded-lg text-center text-indigo-500 flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          No features information available
        </div>
      );
    }

    return (
      <div className="features-list">
        {hallData.features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-dot"></div>
            {feature}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="hall-info-container">
      {infoRows.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow className="bg-indigo-50">
              <TableHead className="w-1/3 text-indigo-700">Attribute</TableHead>
              <TableHead className="text-indigo-700">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {infoRows.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-purple-50/50'}>
                <TableCell className="font-medium flex items-center gap-2">
                  {row.icon}
                  {row.label}
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="p-6 bg-gray-50 rounded-lg text-center">
          <AlertTriangle className="w-6 h-6 text-amber-500 mx-auto mb-2" />
          <p className="text-gray-700">No information available for this hall</p>
        </div>
      )}

      <div className="features-section">
        <h3 className="features-title">
          <CheckSquare className="w-5 h-5 text-indigo-500" />
          Features
        </h3>
        {renderFeatures()}
      </div>
    </div>
  );
}