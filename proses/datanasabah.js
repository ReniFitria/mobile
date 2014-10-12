         $(document).ready(function() {               
            $("#tombol").click(function() {
               $.ajax( { 
                  url: "http://reneefitria.com/mobile4/datanasabah/xhrGetListings",        
                  dataType: "json",
                  success:   function(items) {
                     var teks = "";

                     $.each(items, function(indeks, nilai) {
                        var no_rekening = nilai.no_rekening;
                        var nama_nasabah = nilai.nama_nasabah; 
                        var alamat_nasabah = nilai.alamat_nasabah; 
						var telepon = nilai.telepon;
						var saldo = nilai.saldo;

                        teks += "<tr><td>" + no_rekening +
                                "</td><td>" + nama_nasabah +
                                "</td><td>" + alamat_nasabah +
								"</td><td>" + telepon +
								"</td><td>" + saldo +
                                "</td></tr>";
                     });
                     
                     teks += "</tbody></table>";
                     $("#info").append(teks);
                  },
                  error:   function(xhr, statusteks, kesalahan) {
                     $("#info").text("Kesalahan: " + 
                                     kesalahan);
                   },
               });
            });      
         });