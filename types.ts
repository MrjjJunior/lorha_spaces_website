import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  title: string;
  description: string;
  items: string[];
  icon: React.ComponentType<any>;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface CompanyStats {
  year: string;
  users: number;
  revenue: number;
}