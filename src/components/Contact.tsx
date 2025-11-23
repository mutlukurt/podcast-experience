import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20 md:px-12">
            <div className="bg-black rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

                    {/* Contact Info */}
                    <div className="text-white">
                        <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold uppercase mb-6">
                            Get in Touch
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black uppercase leading-none mb-8">
                            Let's Start a<br />Conversation
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            Have a question, suggestion, or just want to say hello? We'd love to hear from you. Fill out the form or reach out directly.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="text-yellow-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Email Us</h3>
                                    <p className="text-gray-400">hello@podcastexperience.com</p>
                                    <p className="text-gray-400">support@podcastexperience.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="text-yellow-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Call Us</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                    <p className="text-gray-400">Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="text-yellow-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Visit Us</h3>
                                    <p className="text-gray-400">123 Podcast Avenue, Suite 100</p>
                                    <p className="text-gray-400">New York, NY 10001</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 md:p-10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-bold uppercase ml-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-xl px-4 py-3 outline-none transition-colors font-medium"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-bold uppercase ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-xl px-4 py-3 outline-none transition-colors font-medium"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold uppercase ml-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-xl px-4 py-3 outline-none transition-colors font-medium"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold uppercase ml-1">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-xl px-4 py-3 outline-none transition-colors font-medium appearance-none"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="collaboration">Collaboration</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="support">Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold uppercase ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-gray-100 border-2 border-transparent focus:border-black rounded-xl px-4 py-3 outline-none transition-colors font-medium resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-black font-black uppercase py-4 rounded-xl hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-900 rounded-full translate-x-1/3 -translate-y-1/3 -z-0 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-900 rounded-full -translate-x-1/3 translate-y-1/3 -z-0 opacity-50"></div>
            </div>
        </div>
    );
};

export default Contact;
