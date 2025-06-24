import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] mt-12'>
            <div>
                header
            </div>

            <div className='grid md:grid-cols-12 justify-around gap-10'>
                <div className='col-span-5'>
                    <img src="/src/assets/faqImage.PNG" className='w-full' alt="" />
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full col-span-7"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What foods should I avoid to keep my teeth healthy?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Sticky candies, sugary drinks, and acidic foods like soda and citrus can erode enamel and cause cavities. Try to limit these and brush soon after consuming them.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How often should I visit the dentist?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It’s recommended to visit your dentist every 6 months for a check-up and cleaning, even if you’re not experiencing any issues.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Are electric toothbrushes better than manual ones?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. Grinding can wear down enamel, cause tooth sensitivity, and lead to jaw pain. If you grind your teeth, talk to your dentist about using a night guard.
                            </p>
                            
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Is teeth grinding bruxism harmful?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. Grinding can wear down enamel, cause tooth sensitivity, and lead to jaw pain. If you grind your teeth, talk to your dentist about using a night guard.
                            </p>
                            
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;