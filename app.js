const _supabase = supabase.createClient(https://wminjyenuywthmfczrfh.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtaW5qeWVudXl3dGhtZmN6cmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNjk4ODQsImV4cCI6MjA5MzY0NTg4NH0.3KBnEtKEDEi66jZnbDi3INA6oaO4bh8PXP7_spCXdJY);

async function addItem() {
    const title = document.getElementById('newItem').value;
    const { data, error } = await _supabase
        .from('nexus_items')
        .insert([{ title: title }]);

    if (!error) location.reload(); // Simple refresh to show new data
}