
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Home, Info, Heart } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="layout-container">
      <nav className="layout-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-1 sm:space-x-4 md:space-x-8 overflow-x-auto py-2 w-full">
              <Link to={createPageUrl("Home")} className="layout-navlink whitespace-nowrap">
                <Home className="w-5 h-5 mr-1 sm:mr-2 flex-shrink-0" />
                <span>Home</span>
              </Link>
              <Link to={createPageUrl("About")} className="layout-navlink whitespace-nowrap">
                <Info className="w-5 h-5 mr-1 sm:mr-2 flex-shrink-0" />
                <span>About</span>
              </Link>
              <Link to={createPageUrl("Donations")} className="layout-navlink whitespace-nowrap">
                <Heart className="w-5 h-5 mr-1 sm:mr-2 flex-shrink-0" />
                <span>Donations</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <style jsx>{`
        /* Override dropdown styles to ensure visibility */
        [data-radix-popper-content-wrapper] {
          background-color: white !important;
        }
        
        .select-content {
          background-color: white !important;
          color: #111827 !important;
        }
        
        .select-item {
          color: #111827 !important;
        }

        .select-item:hover {
          background-color: #eef2ff !important;
        }
        
        @media (max-width: 640px) {
          .layout-navlink {
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
      
      <main className="layout-main-content">{children}</main>
    </div>
  );
}
