'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Is Weatherly free to use?',
            answer: 'Yes, Weatherly is completely free to download and use. We may introduce premium features in the future, but all core functionality will remain free.',
        },
        {
            id: 'item-2',
            question: 'How accurate is the weather data?',
            answer: 'We use OpenWeatherMap&#39;s API which provides highly accurate weather data with a 99% accuracy rate for location-based forecasts. Our hyperlocal technology ensures minute-by-minute precision.',
        },
        {
            id: 'item-3',
            question: 'Does Weatherly work offline?',
            answer: 'Weatherly caches your last viewed weather data for offline access, but you&#39;ll need an internet connection to get updated forecasts. The app works best with a stable connection.',
        },
        {
            id: 'item-4',
            question: 'Which platforms are supported?',
            answer: 'Weatherly is available for both iOS and Android devices. A web version is planned for the future to provide a seamless experience across all your devices.',
        },
        {
            id: 'item-5',
            question: 'How do I customize weather alerts?',
            answer: 'You can set up personalized weather alerts in the app settings. Choose from severe weather warnings, precipitation notifications, temperature changes, and more to stay informed about conditions that matter to you.',
        },
    ]

    return (
        <section className="bg-muted py-16 md:py-24" id="faq">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6">
                        Can&#39;t find what you&#39;re looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}