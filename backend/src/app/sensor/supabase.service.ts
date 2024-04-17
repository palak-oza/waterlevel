// supabase.service.ts
import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
     apikey:'',
     apiurl:''
    );
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}

export default SupabaseService ; // Export the SupabaseService
