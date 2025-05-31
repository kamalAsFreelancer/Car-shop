// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qziackwiglwzyzfuvaak.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6aWFja3dpZ2x3enl6ZnV2YWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MDE4MTQsImV4cCI6MjA2MjQ3NzgxNH0.KraFmOQqeSrrVanQvsUfjBWvbrWYIS3WnbFzr18Q3_I'


export const supabase = createClient(supabaseUrl, supabaseKey)
