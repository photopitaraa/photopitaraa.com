'use client';

import { useState } from 'react';
import {
  Alert,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { sendContactEmail, type ContactFormData } from '@/lib/emailjs';
import { siteConfig } from '@/data/siteConfig';

const eventTypes = [
  'Wedding Photography',
  'Cinematic Film',
  'Pre-Wedding Shoot',
  'Birthday',
  'Baby Shower',
  'Maternity',
  'Corporate Event',
  'Albums & Prints',
  'Other',
];

const initialData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; severity: 'success' | 'error'; message: string }>({
    open: false,
    severity: 'success',
    message: '',
  });

  const handleChange = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: string } }) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContactEmail(formData);
      setSnackbar({ open: true, severity: 'success', message: 'Thank you! We\'ll be in touch within 24 hours.' });
      setFormData(initialData);
    } catch {
      setSnackbar({ open: true, severity: 'error', message: 'Something went wrong. Please try WhatsApp or email us directly.' });
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? siteConfig.whatsapp}?text=${encodeURIComponent(`Hi! I'd like to enquire about a ${formData.eventType || 'photography'} session on ${formData.eventDate || 'TBD'}.`)}`;

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      fontFamily: 'Inter, sans-serif',
      '& fieldset': { borderColor: 'rgba(255,183,3,0.2)' },
      '&:hover fieldset': { borderColor: 'gold.main' },
      '&.Mui-focused fieldset': { borderColor: 'gold.main' },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: 'gold.main' },
    '& .MuiInputLabel-root': { fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' },
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2.5 }}>
        <TextField
          label="Your Name"
          value={formData.name}
          onChange={handleChange('name')}
          required
          fullWidth
          sx={fieldSx}
        />
        <TextField
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          required
          fullWidth
          sx={fieldSx}
        />
        <TextField
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleChange('phone')}
          fullWidth
          sx={fieldSx}
        />
        <TextField
          label="Event Date"
          type="date"
          value={formData.eventDate}
          onChange={handleChange('eventDate')}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={fieldSx}
        />
      </Box>

      <FormControl fullWidth sx={{ mb: 2.5, ...fieldSx }}>
        <InputLabel>Event Type</InputLabel>
        <Select
          value={formData.eventType}
          label="Event Type"
          onChange={(e) => setFormData((p) => ({ ...p, eventType: e.target.value }))}
        >
          {eventTypes.map((t) => (
            <MenuItem key={t} value={t} sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
              {t}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Tell Us About Your Event"
        multiline
        rows={5}
        value={formData.message}
        onChange={handleChange('message')}
        fullWidth
        sx={{ mb: 3, ...fieldSx }}
        placeholder="Share your vision, venue, or any specific requests — we love the details."
      />

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <AnimatedButton
          variant="filled"
          type="submit"
          disabled={loading}
          sx={{ flex: { xs: '1 1 100%', sm: 'initial' } }}
        >
          {loading ? 'Sending…' : 'Send Enquiry'}
        </AnimatedButton>

        <AnimatedButton
          variant="outlined"
          href={whatsappUrl}
          external
          sx={{ flex: { xs: '1 1 100%', sm: 'initial' } }}
        >
          <WhatsApp sx={{ fontSize: 18, mr: 1 }} />
          WhatsApp Us Instead
        </AnimatedButton>
      </Box>

      <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'text.secondary', mt: 2 }}>
        We typically respond within a few hours. For urgent enquiries, WhatsApp is fastest.
      </Typography>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          sx={{ fontFamily: 'Inter, sans-serif' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
