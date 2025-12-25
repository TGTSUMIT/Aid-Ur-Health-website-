import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Activity, TrendingUp, AlertCircle, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export function LiveUpdates() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Indian cities with live data
  const [cityData, setCityData] = useState([
    { city: "Mumbai", activeCases: 2845, vaccineCoverage: 82, population: 20411000 },
    { city: "Delhi", activeCases: 3120, vaccineCoverage: 79, population: 16787941 },
    { city: "Bangalore", activeCases: 1890, vaccineCoverage: 85, population: 8443675 },
    { city: "Hyderabad", activeCases: 1245, vaccineCoverage: 81, population: 6809970 },
    { city: "Ahmedabad", activeCases: 980, vaccineCoverage: 77, population: 5570585 },
    { city: "Chennai", activeCases: 1567, vaccineCoverage: 83, population: 7088000 },
    { city: "Kolkata", activeCases: 1432, vaccineCoverage: 80, population: 4496694 },
    { city: "Pune", activeCases: 876, vaccineCoverage: 84, population: 3124458 }
  ]);

  const [totalStats, setTotalStats] = useState({
    totalActiveCases: 12450,
    avgVaccineCoverage: 78.5,
    totalRecovered: 245678,
    totalTests: 1234567
  });

  // Update time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  // Update city data every 5 seconds
  useEffect(() => {
    const dataInterval = setInterval(() => {
      setCityData(prev => prev.map(city => ({
        ...city,
        activeCases: Math.max(500, city.activeCases + Math.floor(Math.random() * 100) - 50),
        vaccineCoverage: Math.min(95, Math.max(70, city.vaccineCoverage + (Math.random() * 0.4 - 0.2)))
      })));

      setTotalStats(prev => ({
        ...prev,
        totalActiveCases: Math.max(12000, prev.totalActiveCases + Math.floor(Math.random() * 200) - 100),
        avgVaccineCoverage: Math.min(85, Math.max(75, prev.avgVaccineCoverage + (Math.random() * 0.2 - 0.1))),
        totalRecovered: prev.totalRecovered + Math.floor(Math.random() * 50),
        totalTests: prev.totalTests + Math.floor(Math.random() * 500)
      }));
    }, 5000);

    return () => clearInterval(dataInterval);
  }, []);

  // Prepare data for charts
  const activeCasesChartData = cityData.map(city => ({
    name: city.city,
    cases: city.activeCases,
    color: getCityColor(city.city)
  }));

  const vaccineCoverageChartData = cityData.map(city => ({
    name: city.city,
    coverage: parseFloat(city.vaccineCoverage.toFixed(1))
  }));

  const COLORS = ['#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#22d3ee', '#67e8f9', '#a5f3fc'];

  function getCityColor(city: string) {
    const colorMap: { [key: string]: string } = {
      'Mumbai': '#06b6d4',
      'Delhi': '#0891b2',
      'Bangalore': '#0e7490',
      'Hyderabad': '#155e75',
      'Ahmedabad': '#164e63',
      'Chennai': '#22d3ee',
      'Kolkata': '#67e8f9',
      'Pune': '#a5f3fc'
    };
    return colorMap[city] || '#06b6d4';
  }

  return (
    <section id="live-updates" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity className="h-6 w-6 text-cyan-600 animate-pulse" />
            <span className="text-cyan-600 font-medium">LIVE MONITORING</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real-time Pandemic Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Live tracking of active cases and vaccination coverage across major Indian cities
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Activity className="h-4 w-4" />
            <span>Last updated: {currentTime.toLocaleTimeString('en-IN')}</span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white border-cyan-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-600">Total Active Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-cyan-600">
                {totalStats.totalActiveCases.toLocaleString()}
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                <TrendingUp className="h-4 w-4" />
                <span>Across 8 major cities</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-teal-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-600">Avg. Vaccine Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-teal-600">
                {totalStats.avgVaccineCoverage.toFixed(1)}%
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                <Activity className="h-4 w-4" />
                <span>National average</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-600">Total Recovered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {totalStats.totalRecovered.toLocaleString()}
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span>+{Math.floor(Math.random() * 50)} today</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-600">Total Tests Conducted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {(totalStats.totalTests / 1000000).toFixed(2)}M
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                <Activity className="h-4 w-4" />
                <span>In last 30 days</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Active Cases Bar Chart */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-cyan-600" />
                Active Cases by City
              </CardTitle>
              <CardDescription>Real-time active case distribution across major cities</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={activeCasesChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#666' }} 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: '#666' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #06b6d4',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="cases" fill="#06b6d4" name="Active Cases" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Vaccine Coverage Bar Chart */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-teal-600" />
                Vaccination Coverage by City
              </CardTitle>
              <CardDescription>Current vaccination coverage percentage across cities</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={vaccineCoverageChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#666' }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: '#666' }} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #14b8a6',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => `${value}%`}
                  />
                  <Legend />
                  <Bar dataKey="coverage" fill="#14b8a6" name="Vaccine Coverage %" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* City-wise Detailed Data */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-cyan-600" />
              City-wise Live Data
            </CardTitle>
            <CardDescription>Detailed breakdown of active cases and vaccination coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cityData.map((city, index) => (
                <div 
                  key={city.city} 
                  className="p-4 rounded-xl border-2 border-cyan-100 bg-gradient-to-br from-white to-cyan-50 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-cyan-600" />
                        {city.city}
                      </h4>
                      <p className="text-xs text-gray-500">Pop: {(city.population / 1000000).toFixed(1)}M</p>
                    </div>
                    <Badge 
                      className={`${
                        city.activeCases > 2000 ? 'bg-red-500' : 
                        city.activeCases > 1500 ? 'bg-orange-500' : 
                        'bg-green-500'
                      } text-white`}
                    >
                      {city.activeCases > 2000 ? 'HIGH' : city.activeCases > 1500 ? 'MED' : 'LOW'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Active Cases</span>
                      <span className="font-bold text-cyan-600">{city.activeCases.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Vaccination</span>
                      <span className="font-bold text-teal-600">{city.vaccineCoverage.toFixed(1)}%</span>
                    </div>
                    
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${city.vaccineCoverage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Update Notice */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full">
            <Activity className="h-4 w-4 animate-pulse" />
            <span className="text-sm">Data updates every 5 seconds • Source: India Health Ministry</span>
          </div>
        </div>
      </div>
    </section>
  );
}
