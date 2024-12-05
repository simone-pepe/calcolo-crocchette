
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://awtfgmsrjwkxewhzmwib.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3dGZnbXNyandreGV3aHptd2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0Mzg3MjMsImV4cCI6MjA0OTAxNDcyM30.6MKqUUTA8OJa_uBtia_x12dVQs6ILz6CaBl63XrLkWM'; // Sostituisci con la tua chiave anon
const supabase = createClient(supabaseUrl, SUPABASE_ANON_KEY)



// async function fetchFeeds() {
//     const { data, error } = await supabase
//         .from('public.MANGIMI')
//         .select('*')
//         .order('date', { ascending: false }); // Ordina per data
//     if (error) {
//         console.error('Errore nel recupero dei dati:', error.message);
//         return [];
//     }
//     return data; // Ritorna i dati per elaborarli nel DOM
//   }
  
  
//   async function populateTable() {
//     const feeds = await fetchFeeds();
//     const tableBody = document.querySelector('#risultati'); // Sostituisci con il tuo ID
//     tableBody.innerHTML = ''; // Pulisce la tabella
//     feeds.forEach(feed => {
//         const row = `
//             <tr>
//                 <td>${MANGIMI.MARCA}</td>
//                 <td>${MANGIMI.TIPO}</td>
//                 <td>${MANGIMI.PUNTEGGIO}</td>
//             </tr>`;
//         tableBody.innerHTML += row;
//     });
//   }