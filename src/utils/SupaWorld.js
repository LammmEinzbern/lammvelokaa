import { createClient } from "@supabase/supabase-js";

const supabase_url = "https://nsesstzzpfahwkqaqaeu.supabase.co";
const supabase_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zZXNzdHp6cGZhaHdrcWFxYWV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MTQ1OTksImV4cCI6MjA2MjI5MDU5OX0.D30JpUeoKCYGc2aP_tpv0ZjadJXPpKpObPOT_fApZnk";
export const supabase = createClient(supabase_url, supabase_key);
