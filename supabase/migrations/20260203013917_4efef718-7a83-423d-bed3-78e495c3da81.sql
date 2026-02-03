-- Fix Security Issue 1: Remove overly permissive SELECT policy on contact_submissions
-- This policy allows ANY authenticated user to view ALL contact submissions (PII exposure)
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;

-- Fix Security Issue 2: Add explicit DELETE policy on profiles table for defense in depth
-- This explicitly denies profile deletion (handled via CASCADE on auth.users deletion)
CREATE POLICY "Profile deletion not allowed"
ON public.profiles FOR DELETE
USING (false);