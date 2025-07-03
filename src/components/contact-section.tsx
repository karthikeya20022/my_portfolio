'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {useToast} from '@/hooks/use-toast';
import {Card} from '@/components/ui/card';
import {Mail, Phone, MapPin, Linkedin, Loader2} from 'lucide-react';
import {motion} from 'framer-motion';
import {sendEmail} from '@/ai/flows/send-email-flow';
import {
  SendEmailInputSchema,
  type SendEmailInput,
} from '@/ai/schemas/send-email-schema';
import {useState} from 'react';

const ContactSection = () => {
  const {toast} = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof SendEmailInputSchema>>({
    resolver: zodResolver(SendEmailInputSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: SendEmailInput) {
    setIsSubmitting(true);
    try {
      await sendEmail(values);
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      });
      form.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{opacity: 0, y: -50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary"
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.7, ease: 'easeOut'}}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-primary">
              Contact Information
            </h3>
            <Card className="p-6">
              <ul className="space-y-4 text-base md:text-lg">
                <li className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-accent" />
                  <a
                    href="mailto:karthikeyagupta93@gmail.com"
                    className="hover:text-accent transition-colors"
                  >
                    karthikeyagupta93@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-accent" />
                  <span>+91 9182527963</span>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-accent" />
                  <span>Kunkalagunta, AP, India</span>
                </li>
                <li className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-accent" />
                  <a
                    href="https://www.linkedin.com/in/arvapalli-karthikeya-gupta-b9803b1b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.7, ease: 'easeOut'}}
          >
            <Card className="p-6 shadow-lg">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Regarding..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message here..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    variant="default"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
