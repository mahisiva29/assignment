$(document).ready(function(){
   var table = $('#example').DataTable({
      ajax: 'https://gyrocode.github.io/files/jquery-datatables/arrays.json',
      dom: 'Alfrtip',
      alphabetSearch: {
         column: 0
      },
      language: {
         alphabetSearch: {
            alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
         }
      }
   });
});
