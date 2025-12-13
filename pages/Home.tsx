import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  Globe,
  ChevronRight,
  BarChart2,
  Database
} from 'lucide-react';
import { CLIENTS } from '../constants';

export const Home: React.FC = () => {
  // CRA 기준 서브경로 배포 대응 (예: /ndnex 하위)
  const BASE = (process.env.PUBLIC_URL || '').replace(/\/$/, '');

  // client.logo가 "/logos/xxx.jpg" 같은 상대경로면 BASE를 붙여서 안전하게 만들기
  const resolveLogoSrc = (logo?: string) => {
    if (!logo) return '';
    // 이미 절대 URL이면 그대로
    if (/^https?:\/\//i.test(logo)) return logo;
    // data uri도 그대로
    if (/^data:/i.test(logo)) return logo;
    // "/logos/..." 또는 "logos/..." 형태면 BASE를 붙임
    const normalized = logo.startsWith('/') ? logo : `/${logo}`;
    return `${BASE}${normalized}`;
  };

  // List of clients that need gigantic logo display (approx 5x)
  const GIGANTIC_LOGOS = ["Daewoo"];

  // List of clients that need huge logo display (approx 3x)
  const HUGE_LOGOS = ["Daewoong"];

  // List of clients that need very large logo display (approx 2.5x)
  const VERY_LARGE_LOGOS = [
    "LitePharmTech",
    "Ahn-Gook",
    "Hyundai",
    "Myungin",
    "PharmaEssentia",
    "Roche",
    "Bristol Myers Squibb",
    "Samchundang"
  ];

  // List of clients that need extra large logo display (approx 2x)
  const EXTRA_LARGE_LOGOS = ["Ipsen", "Novo Nordisk"];

  // List of clients that need larger logo display (approx 1.5x)
  const LARGE_LOGOS = [
    "Daewon",
    "Daiichi-Sankyo",
    "Samchundang",

