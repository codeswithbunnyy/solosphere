const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Why Choose Creavora?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p><span style=\"font-weight: 400\">Your brand is everything worth fighting for.\u00a0</span></p><p><span style=\"font-weight: 400\">We are the solution to level up your brands by providing stunning templates and helping you stand out by writing powerful copywriting. At Creavora Studio, we commit to giving our best to our clients.</span></p>"
            }
        },
        {
            "@type": "Question",
            "name": "What services do you provide?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p><span style=\"font-weight: 400\">We help to create everything from your design needs to copywriting for your business. Please contact us to discuss your project and design requirements.</span></p>"
            }
        },
        {
            "@type": "Question",
            "name": "How do I download the templates?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel. Proin augue tortor, condimentum id sapien a, tempus venenatis massa. Aliquam egestas eget diam sed sagittis. Vivamus consectetur purus vel felis molestie sollicitudin. Vivamus sit amet enim nisl. Cras vitae varius metus, a hendrerit ex. Sed in mi dolor. Proin pretium nibh non volutpat efficitur."
            }
        },
        {
            "@type": "Question",
            "name": "Will your template be fully compatible with Canva?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel. Proin augue tortor, condimentum id sapien a, tempus venenatis massa. Aliquam egestas eget diam sed sagittis. Vivamus consectetur purus vel felis molestie sollicitudin. Vivamus sit amet enim nisl. Cras vitae varius metus, a hendrerit ex. Sed in mi dolor. Proin pretium nibh non volutpat efficitur."
            }
        },
        {
            "@type": "Question",
            "name": "What types of payment do you accept?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl vitae magna pulvinar laoreet. Nullam erat ipsum, mattis nec mollis ac, accumsan a enim. Nunc at euismod arcu. Aliquam ullamcorper eros justo, vel mollis neque facilisis vel. Proin augue tortor, condimentum id sapien a, tempus venenatis massa. Aliquam egestas eget diam sed sagittis. Vivamus consectetur purus vel felis molestie sollicitudin. Vivamus sit amet enim nisl. Cras vitae varius metus, a hendrerit ex. Sed in mi dolor. Proin pretium nibh non volutpat efficitur."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer custom work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "<p><span style=\"font-weight: 400\">Yes, we do. Kindly reach us to discuss the custom work (email)</span></p>"
            }
        }
    ]
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(faqSchema);
document.head.appendChild(script);
