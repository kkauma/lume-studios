"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  Wand2,
  Users,
  Target,
  Palette,
  Share2,
  LineChart,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0a0a2c] to-gray-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background gradient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm text-gray-300">
                  AI-Powered Content Creation
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Content beyond imagination.
              <br />
              One prompt away.
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              Transform your ideas into engaging content with AI precision.
              Perfect for marketers, bloggers, and businesses of all sizes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Get Started Free
              </Link>
              <a
                href="#overview"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your AI Content Partner
            </h2>
            <p className="text-xl text-gray-400">
              Create, optimize, and scale your content creation process
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Content Generation */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Smart Content Generation
              </h3>
              <p className="text-gray-400">
                Generate high-quality blog posts, social media content, and
                marketing copy in seconds. Our AI understands your brand voice
                and industry context.
              </p>
            </div>

            {/* Real-time Optimization */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Real-time Optimization
              </h3>
              <p className="text-gray-400">
                Get instant suggestions for improving engagement, readability,
                and SEO. Create content that resonates with your audience.
              </p>
            </div>

            {/* Analytics & Insights */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Analytics & Insights
              </h3>
              <p className="text-gray-400">
                Track performance, understand what works, and continuously
                improve your content strategy with data-driven insights.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              How It Works
            </h3>
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />

              {/* Steps */}
              <div className="space-y-12">
                <div className="flex items-center gap-8">
                  <div className="w-1/2 text-right">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      1. Describe Your Content
                    </h4>
                    <p className="text-gray-400">
                      Input your topic, choose your content type, and set your
                      preferences.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="w-1/2" />
                </div>

                <div className="flex items-center gap-8">
                  <div className="w-1/2" />
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="w-1/2">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      2. AI Generation
                    </h4>
                    <p className="text-gray-400">
                      Our AI analyzes your input and generates unique, engaging
                      content tailored to your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="w-1/2 text-right">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      3. Review & Customize
                    </h4>
                    <p className="text-gray-400">
                      Edit, refine, and personalize the generated content to
                      match your exact requirements.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Content Creation
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to create engaging content that converts
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Writing Assistant */}
            <div className="group relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm border border-gray-700/50">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Wand2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Writing Assistant
              </h3>
              <p className="text-gray-400 mb-4">
                Generate high-quality content with our advanced AI. Perfect for
                blog posts, social media, and marketing copy.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <code className="text-sm text-blue-400">
                    &quot;Write a compelling tweet about our new eco-friendly
                    product line&quot;
                  </code>
                </div>
              </div>
            </div>

            {/* Smart Templates */}
            <div className="group relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm border border-gray-700/50">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Smart Templates
              </h3>
              <p className="text-gray-400 mb-4">
                Choose from hundreds of industry-specific templates. Customize
                and brand them to match your voice.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-900/50 rounded-lg p-2 text-center text-sm text-gray-400">
                    Blog Post
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-2 text-center text-sm text-gray-400">
                    Newsletter
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-2 text-center text-sm text-gray-400">
                    Social Post
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-2 text-center text-sm text-gray-400">
                    Ad Copy
                  </div>
                </div>
              </div>
            </div>

            {/* Audience Targeting */}
            <div className="group relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm border border-gray-700/50">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Audience Targeting
              </h3>
              <p className="text-gray-400 mb-4">
                Create content tailored to your target audience. Optimize tone,
                style, and messaging for maximum impact.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-900/50 rounded-full px-3 py-1 text-sm text-gray-400">
                    Gen Z
                  </span>
                  <span className="bg-gray-900/50 rounded-full px-3 py-1 text-sm text-gray-400">
                    Professionals
                  </span>
                  <span className="bg-gray-900/50 rounded-full px-3 py-1 text-sm text-gray-400">
                    Tech-Savvy
                  </span>
                </div>
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="group relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm border border-gray-700/50">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-400 mb-4">
                Work together seamlessly. Share templates, provide feedback, and
                maintain consistent brand messaging.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                      JD
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm">
                      AS
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                      MK
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">+3 others</span>
                </div>
              </div>
            </div>

            {/* Multi-Channel Publishing */}
            <div className="group relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm border border-gray-700/50">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Multi-Channel Publishing
              </h3>
              <p className="text-gray-400 mb-4">
                Publish directly to multiple platforms. Automatically format
                content for each channel.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-3 justify-center">
                  <div className="w-8 h-8 bg-gray-900/50 rounded-lg flex items-center justify-center">
                    <i className="fab fa-twitter text-gray-400"></i>
                  </div>
                  <div className="w-8 h-8 bg-gray-900/50 rounded-lg flex items-center justify-center">
                    <i className="fab fa-linkedin text-gray-400"></i>
                  </div>
                  <div className="w-8 h-8 bg-gray-900/50 rounded-lg flex items-center justify-center">
                    <i className="fab fa-instagram text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics & Insights */}
            <div className="group relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm border border-gray-700/50">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Analytics & Insights
              </h3>
              <p className="text-gray-400 mb-4">
                Track performance metrics, engagement rates, and content
                effectiveness. Make data-driven decisions.
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-20 bg-gray-900/50 rounded-lg p-2">
                  <div className="flex items-end h-full gap-1">
                    <div className="w-1/6 h-40% bg-indigo-400 rounded"></div>
                    <div className="w-1/6 h-60% bg-indigo-400 rounded"></div>
                    <div className="w-1/6 h-30% bg-indigo-400 rounded"></div>
                    <div className="w-1/6 h-80% bg-indigo-400 rounded"></div>
                    <div className="w-1/6 h-50% bg-indigo-400 rounded"></div>
                    <div className="w-1/6 h-70% bg-indigo-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Demo Section */}
          <div className="mt-24 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full">
              <div className="bg-gray-900 rounded-full px-8 py-4">
                <p className="text-xl text-white mb-4">
                  Ready to transform your content creation?
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Try it free for 7 days <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
