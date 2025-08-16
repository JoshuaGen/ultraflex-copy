import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, ChevronRight, Building, Navigation, Zap, ChevronLeft, Star, Check } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useState } from 'react';

interface Location {
    id: number;
    name: string;
    address: string;
    phone: string;
    image: string;
    slug: string;
    hours: {
        weekdays: string;
        weekends: string;
    };
}

interface MembershipPlan {
    id: number;
    name: string;
    price: number;
    period: string;
    features: string[];
    popular: boolean;
}

interface LocationsIndexProps {
    locations: Location[];
    membershipPlans: MembershipPlan[];
    auth: {
        user: any;
    };
}

export default function LocationsIndex({ locations, membershipPlans, auth }: LocationsIndexProps) {
    const [currentMembershipSlide, setCurrentMembershipSlide] = useState(0);
    const membershipPlansPerSlide = 3;
    const totalMembershipSlides = Math.ceil(membershipPlans.length / membershipPlansPerSlide);

    const nextMembershipSlide = () => {
        setCurrentMembershipSlide((prev) => (prev + 1) % totalMembershipSlides);
    };

    const prevMembershipSlide = () => {
        setCurrentMembershipSlide((prev) => (prev - 1 + totalMembershipSlides) % totalMembershipSlides);
    };

    const getCurrentMembershipPlans = () => {
        const startIndex = currentMembershipSlide * membershipPlansPerSlide;
        return membershipPlans.slice(startIndex, startIndex + membershipPlansPerSlide);
    };
    return (
        <AppLayout auth={auth}>
            <Head title="Our Locations - UltraFlex">
                <meta name="description" content="Find the UltraFlex gym nearest to you. State-of-the-art equipment and premium amenities at every location." />
            </Head>

            <div className="min-h-screen relative">
                {/* Global Animated Background */}
                <AnimatedBackground 
                    variant="gradient" 
                    intensity="medium"
                    className="z-0"
                />
                
                {/* All content with higher z-index */}
                <div className="relative z-10">
                    {/* Hero Section */}
                    <section className="relative py-20 overflow-hidden">
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&q=80)'
                            }}
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/70 to-black/80 backdrop-blur-sm" />
                        
                        {/* Hero particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {Array.from({ length: 15 }, (_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 3}s`,
                                        animationDuration: `${2 + Math.random() * 2}s`
                                    }}
                                />
                            ))}
                        </div>

                        <div className="container mx-auto px-6 text-center relative z-10">
                            <h1 className="text-5xl font-bold mb-6">
                                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">Our</span>{' '}
                                <span className="text-red-700 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-pulse">Locations</span>
                            </h1>
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                                Find the UltraFlex gym nearest to you. Each location features 
                                state-of-the-art equipment, expert trainers, and premium amenities 
                                to help you achieve your fitness goals.
                            </p>
                        </div>
                    </section>

                    {/* Locations Grid */}
                    <section className="py-20">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {locations.map((location) => (
                                    <Card key={location.id} className="overflow-hidden hover:shadow-2xl hover:shadow-red-700/10 transition-all duration-300 hover:-translate-y-1 bg-black/40 backdrop-blur-md border border-white/10 hover:border-red-700/30 group">
                                        <div className="h-64 bg-gray-800 relative overflow-hidden">
                                            <img 
                                                src={location.image} 
                                                alt={`${location.name} - UltraFlex Gym`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            
                                            {/* Location name overlay */}
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <h3 className="text-xl font-bold drop-shadow-lg group-hover:text-red-700 transition-colors duration-300">{location.name}</h3>
                                            </div>

                                            {/* Premium badge */}
                                            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-700 to-red-800 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-red-700/20">
                                                Premium
                                            </div>

                                            {/* View details overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 border border-red-700/20 backdrop-blur-sm flex items-center">
                                                    <Building className="h-4 w-4 mr-2" />
                                                    View Details
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <CardContent className="p-6 bg-black/20 backdrop-blur-sm">
                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-start space-x-2 group hover:text-red-700 transition-colors duration-300">
                                                    <MapPin className="h-5 w-5 text-red-700 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">{location.address}</span>
                                                </div>
                                                
                                                <div className="flex items-center space-x-2 group hover:text-red-700 transition-colors duration-300">
                                                    <Phone className="h-4 w-4 text-red-700 flex-shrink-0" />
                                                    <span className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">{location.phone}</span>
                                                </div>
                                                
                                                <div className="flex items-start space-x-2 group hover:text-red-700 transition-colors duration-300">
                                                    <Clock className="h-4 w-4 text-red-700 mt-0.5 flex-shrink-0" />
                                                    <div className="text-gray-300 text-sm group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                                                        <div>Mon-Fri: {location.hours.weekdays}</div>
                                                        <div>Sat-Sun: {location.hours.weekends}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <Link href={`/locations/${location.slug}`} className="block w-full">
                                                    <Button className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group border border-red-700/20 backdrop-blur-sm">
                                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                            View Gym Details
                                                        </span>
                                                    </Button>
                                                </Link>
                                                <Button 
                                                    variant="outline" 
                                                    className="w-full border-white/50 bg-white/90 text-black hover:text-red-700 hover:bg-white px-4 py-2 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group backdrop-blur-sm"
                                                    onClick={() => window.open(`https://maps.google.com/maps?q=${encodeURIComponent(location.address)}`, '_blank')}
                                                >
                                                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                        Get Directions
                                                    </span>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Membership Options Carousel */}
                            <div className="mt-24">
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold mb-4">
                                        <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">Membership</span>{' '}
                                        <span className="text-red-700 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-pulse">Options</span>
                                    </h2>
                                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                        Choose the perfect membership plan that fits your lifestyle and budget. 
                                        All plans include access to our premium equipment and facilities.
                                    </p>
                                </div>

                                {/* Carousel Container */}
                                <div className="relative">
                                    <div className="overflow-hidden">
                                        <div 
                                            className="flex transition-transform duration-500 ease-in-out" 
                                            style={{ transform: `translateX(-${currentMembershipSlide * 100}%)` }}
                                        >
                                            {Array.from({ length: totalMembershipSlides }, (_, slideIndex) => (
                                                <div key={slideIndex} className="w-full flex-shrink-0">
                                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mx-4 items-stretch">
                                                        {membershipPlans
                                                            .slice(slideIndex * membershipPlansPerSlide, slideIndex * membershipPlansPerSlide + membershipPlansPerSlide)
                                                            .map((plan) => (                                                <Card 
                                                    key={plan.id} 
                                                    className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col ${
                                                        plan.popular 
                                                            ? 'bg-gradient-to-br from-red-900/60 to-red-800/60 border-2 border-red-700/50' 
                                                            : 'bg-black/40 border border-white/10 hover:border-red-700/30'
                                                    } backdrop-blur-md`}
                                                >
                                                                    {plan.popular && (
                                                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                                                            <div className="bg-gradient-to-r from-red-700 to-red-800 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg border border-red-700/20 backdrop-blur-sm flex items-center">
                                                                                <Star className="h-3 w-3 mr-1 fill-current" />
                                                                                MOST POPULAR
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                                      <CardContent className="p-6 relative flex-1 flex flex-col">
                                                        <div className="text-center mb-6">
                                                            <h3 className="text-xl font-bold text-white group-hover:text-red-700 transition-colors duration-300 mb-2">
                                                                {plan.name}
                                                            </h3>
                                                            <div className="flex items-baseline justify-center flex-wrap">
                                                                <span className="text-3xl font-bold text-red-700">£{plan.price}</span>
                                                                <span className="text-gray-400 ml-2 text-sm">/{plan.period}</span>
                                                            </div>
                                                        </div>
                                                        
                                                        <ul className="space-y-3 mb-6 flex-1">
                                                            {plan.features.map((feature, index) => (
                                                                <li key={index} className="flex items-start text-gray-300 group-hover:text-white transition-colors duration-300">
                                                                    <Check className="h-4 w-4 text-red-700 mr-3 flex-shrink-0 mt-0.5" />
                                                                    <span className="text-sm leading-relaxed">{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        
                                                        <Button 
                                                            className={`w-full font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group mt-auto ${
                                                                plan.popular
                                                                    ? 'bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white border border-red-700/20'
                                                                    : 'bg-white text-black hover:bg-red-700 hover:text-white border border-white/20'
                                                            } backdrop-blur-sm`}
                                                        >
                                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                                Choose This Plan
                                                            </span>
                                                        </Button>
                                                    </CardContent>
                                                                </Card>
                                                            ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Navigation Arrows */}
                                    {totalMembershipSlides > 1 && (
                                        <>
                                            <Button
                                                onClick={prevMembershipSlide}
                                                className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-red-700/80 text-white p-2 rounded-full shadow-lg backdrop-blur-md border border-white/10 hover:border-red-700/30 transition-all duration-300 z-10"
                                                size="sm"
                                            >
                                                <ChevronLeft className="h-5 w-5" />
                                            </Button>
                                            <Button
                                                onClick={nextMembershipSlide}
                                                className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-red-700/80 text-white p-2 rounded-full shadow-lg backdrop-blur-md border border-white/10 hover:border-red-700/30 transition-all duration-300 z-10"
                                                size="sm"
                                            >
                                                <ChevronRight className="h-5 w-5" />
                                            </Button>
                                        </>
                                    )}

                                    {/* Carousel Indicators */}
                                    {totalMembershipSlides > 1 && (
                                        <div className="flex justify-center mt-8 space-x-2">
                                            {Array.from({ length: totalMembershipSlides }, (_, index) => (
                                                <Button
                                                    key={index}
                                                    onClick={() => setCurrentMembershipSlide(index)}
                                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                        index === currentMembershipSlide
                                                            ? 'bg-red-700 scale-125'
                                                            : 'bg-white/30 hover:bg-white/50'
                                                    }`}
                                                    size="sm"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center mt-16">
                                <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl shadow-red-700/10 p-8 max-w-2xl mx-auto border border-white/10 relative overflow-hidden">
                                    {/* CTA particles */}
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        {Array.from({ length: 8 }, (_, i) => (
                                            <div
                                                key={i}
                                                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                                                style={{
                                                    top: `${Math.random() * 100}%`,
                                                    left: `${Math.random() * 100}%`,
                                                    animationDelay: `${Math.random() * 3}s`,
                                                    animationDuration: `${2 + Math.random() * 2}s`
                                                }}
                                            />
                                        ))}
                                    </div>

                                    <div className="relative z-10">
                                        <h2 className="text-3xl font-bold mb-4">
                                            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">Can't</span>{' '}
                                            <span className="text-red-700 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] animate-pulse">Find</span>{' '}
                                            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">a</span>{' '}
                                            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">Location</span>{' '}
                                            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">Near</span>{' '}
                                            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">You?</span>
                                        </h2>
                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            We're constantly expanding! Let us know where you'd like to see 
                                            a new UltraFlex location.
                                        </p>
                                        <Link href="/contact">
                                            <Button size="lg" className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group border border-red-700/20 backdrop-blur-sm">
                                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                    Suggest a Location
                                                </span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </AppLayout>
    );
}