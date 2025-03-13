import Image from "next/image"
import {
  ArrowRight,
  Sparkles,
  LineChart,
  BarChart3,
  Lightbulb,
  Zap,
  BarChart4,
  Receipt,
  FolderKanban,
  Wallet,
  Lock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-[120px] opacity-10"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full filter blur-[120px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-8 md:px-14 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                <Sparkles className="h-5 w-5 text-indigo-600" />
                <span className="text-base font-medium text-slate-700">AI-Powered Finance Management</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Finance management
                </span>
                <br />
                reimagined with AI
              </h1>

              <p className="text-xl text-slate-700 max-w-2xl">
              An AI-driven financial management platform designed to track, analyze, and optimize your spending, offering real-time insights to help you make informed financial decisions and reach your goals faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="text-lg py-6 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0"
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg py-6 px-8 border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300`}
                    ></div>
                  ))}
                </div>
                <p className="text-base text-slate-600">
                  <span className="text-indigo-600 font-medium">2,500+</span> users joined this month
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-white p-2 rounded-2xl border border-slate-200 shadow-xl">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-lg text-sm font-medium text-white z-20">
                  AI Dashboard
                </div>
                <Image
                  src="/landing.jpg"
                  width={800}
                  height={600}
                  alt="Finlytics AI Dashboard"
                  className="w-full rounded-xl"
                />
              </div>

              {/* Floating elements - fixed z-index */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-[200px] z-20">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <LineChart className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-600">Monthly Savings</div>
                  <div className="text-lg font-bold text-indigo-600">+27%</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white border border-slate-200 p-4 rounded-lg shadow-lg hidden md:flex items-center gap-3 max-w-[200px] z-20">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-600">Smart Insights</div>
                  <div className="text-lg font-bold text-purple-600">12 New</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-[150px] opacity-10"></div>

        <div className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-4">
              <Zap className="h-5 w-5 text-indigo-600" />
              <span className="text-base font-medium text-slate-700">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 p-1">
              AI-powered tools to transform your finances
            </h2>
            <p className="text-xl text-slate-600">
              Track your expenses with clear insights and easy-to-understand analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart4 className="h-6 w-6 text-indigo-600" />,
                title: "Advanced Analytics",
                description:
                  "Get detailed insights into your spending patterns with AI-powered analytics for better financial planning.",
              },
              {
                icon: <Receipt className="h-6 w-6 text-indigo-600" />,
                title: "Smart Receipt Scanner",
                description:
                  "Extract data automatically from receipts using advanced AI technology, making expense tracking seamless.",
              },
              {
                icon: <FolderKanban className="h-6 w-6 text-indigo-600" />,
                title: "Expense Categorization",
                description:
                  "AI-powered categorization of transactions with high accuracy to keep your finances well-organized.",
              },
              {
                icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
                title: "Automated Insights",
                description:
                  "Receive actionable insights and personalized recommendations tailored to your unique financial situation.",
              },
              {
                icon: <Wallet className="h-6 w-6 text-indigo-600" />,
                title: "Budget Planning",
                description:
                  "Create and manage budgets effortlessly with intelligent recommendations based on your spending habits.",
              },
              {
                icon: <Lock className="h-6 w-6 text-indigo-600" />,
                title: "Secure Authentication",
                description:
                  "Keep your financial data safe with robust authentication measures, ensuring top-level security.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-slate-200 hover:border-indigo-300 transition-all hover:shadow-indigo-100 hover:shadow-lg"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-50 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-10"></div>

        <div className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-base font-medium text-slate-700">Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 p-1">
              How Finlytics works
            </h2>
            <p className="text-xl text-slate-600">
              Getting started is easy. Connect your accounts and let us do the heavy lifting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            {[
              {
                step: "01",
                title: "Connect Your Accounts",
                description:
                  "Securely link your bank accounts, credit cards, and investment accounts with bank-level encryption.",
              },
              {
                step: "02",
                title: "Track Your Spendings",
                description:
                  "Automatically categorize and track your transactions in real-time, keeping your expenses organized and accessible.",
              },
              {
                step: "03",
                title: "Get Smart Insights",
                description:
                  "Receive personalized recommendations, alerts, and insights to help you save money and reach your goals.",
              },
            ].map((item, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white border border-slate-200 rounded-xl p-6 h-full relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <div className="pt-6 space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900 text-center">{item.title}</h3>
                    <p className="text-slate-600 text-center">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/dashboard">
              <Button className="text-lg py-6 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Visualization */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                <BarChart3 className="h-5 w-5 text-indigo-600" />
                <span className="text-base font-medium text-slate-700">Real Results</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 p-1">
                Our users achieve real financial growth
              </h2>

              <p className="text-xl text-slate-600">
                Finlytics users consistently outperform their financial goals with the help of our AI-powered insights
                and recommendations.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "32%", label: "Average Increase in Savings" },
                  { value: "24%", label: "Reduction in Unnecessary Expenses" },
                  { value: "3.5x", label: "Faster Debt Repayment" },
                  { value: "87%", label: "Users Report Better Financial Decisions" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                      {stat.value}
                    </div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-slate-900">Financial Growth</h3>
                  <div className="flex gap-2">
                    <div className="text-xs px-2 py-1 rounded bg-indigo-100 text-indigo-600">Savings</div>
                    <div className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-600">Investments</div>
                  </div>
                </div>

                {/* Placeholder for chart - in a real app, you'd use a chart library */}
                <div className="h-64 w-full relative">
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                    {[30, 45, 25, 60, 35, 75, 50, 85, 65, 90].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                        <div className="text-xs text-slate-500">{i + 1}</div>
                      </div>
                    ))}
                  </div>

                  {/* Trend lines */}
                  <div className="absolute top-1/3 left-0 w-full h-0.5 bg-slate-200"></div>
                  <div className="absolute top-2/3 left-0 w-full h-0.5 bg-slate-200"></div>

                  {/* Growth line connecting data points */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <polyline
                      points="
                        5,${64 * (1 - 30/100)}
                        ${100/9}%,${64 * (1 - 45/100)}
                        ${200/9}%,${64 * (1 - 25/100)}
                        ${300/9}%,${64 * (1 - 60/100)}
                        ${400/9}%,${64 * (1 - 35/100)}
                        ${500/9}%,${64 * (1 - 75/100)}
                        ${600/9}%,${64 * (1 - 50/100)}
                        ${700/9}%,${64 * (1 - 85/100)}
                        ${800/9}%,${64 * (1 - 65/100)}
                        ${900/9 - 0.5}%,${64 * (1 - 90/100)}
                      "
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>

                    {/* Data point circles */}
                    {[-50, -15, -10, 30, 35, 55, 50, 60, 75].map((height, i) => (
                      <circle
                        key={i}
                        cx={`${i * (100 / 9) + 5}%`}
                        cy={`${64 * (1 - height / 100)}px`}
                        r="4"
                        fill="url(#gradient)"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                      />
                    ))}
                  </svg>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-slate-200 p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-[200px] z-20">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-600">Growth Trend</div>
                  <div className="text-lg font-bold text-indigo-600">Positive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-[150px] opacity-10"></div>

        <div className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-indigo-600" />
              <span className="text-base font-medium text-slate-700">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 p-1">
              What our users are saying
            </h2>
            <p className="text-xl text-slate-600">
              Join thousands of users who have transformed their financial lives with Finlytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Tracking daily expenses used to be a hassle, but Finlytics makes it effortless with automatic categorization.",
                name: "Sarah Johnson",
                role: "Marketing Director",
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                quote:
                  "As a freelancer with irregular income, Finlytics helps me stay on top of my earnings and plan for taxes easily.",
                name: "David Chen",
                role: "Freelance Designer",
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                quote:
                  "As a small business owner, Finlytics provides clear insights, helping me manage finances without the stress.",
                name: "Michelle Rodriguez",
                role: "Small Business Owner",
                image: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-slate-200 hover:border-indigo-300 transition-all">
                <CardContent className="p-6 space-y-6">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-indigo-500 opacity-30">"</div>
                    <p className="text-slate-700 relative z-10 pt-4">{testimonial.quote}</p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-indigo-500 opacity-30">"</div>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt={testimonial.name}
                      className="rounded-full h-[50px] w-[50px] border-2 border-indigo-500"
                    />
                    <div>
                      <div className="font-medium text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-[120px] opacity-10"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full filter blur-[120px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-8 md:px-16 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 p-1">
              Ready to transform your financial future with Finlytics?
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already managing their finances smarter with Finlytics. Start your free
              14-day trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="text-lg py-6 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0"
                >
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="text-slate-500 text-sm mt-6">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

