window.onload = function(){
    let csvString = `
    9 Digit (Prakas),9 Name (KH),9 Name (EN),6 Digit,6 Name (KH),6 Name (EN),4 Digit,4 Name (KH),4 Name (EN),2 Digit,2 Name (KH),2 Name (EN)
    010101001,ធនាគារជាតិនៃកម្ពុជា ,National Bank of Cambodia ,010101,ធនាគារជាតិនៃកម្ពុជា ,National Bank of Cambodia,0101,ធនាគារជាតិនៃកម្ពុជា ,National Bank of Cambodia (Central Bank),01,វិស័យ ហិរញ្ញវត្ថុ,Financial
    010101002,ធនាគារកណ្តាល ,Central banking,010101,ធនាគារជាតិនៃកម្ពុជា ,National Bank of Cambodia,0101,ធនាគារជាតិនៃកម្ពុជា ,National Bank of Cambodia (Central Bank),01,វិស័យ ហិរញ្ញវត្ថុ,Financial
    010201001,ធនាគារពាណិជ្ជ ,Commercial Banks,010201,ធនាគារពាណិជ្ជ ,Commercial banks,0102,គ្រឹះស្ថានហិរញ្ញវត្ថុទទួលប្រាក់បញ្ញើ ,Depository Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010202001,គ្រឹះស្ថានមីក្រូហិរញ្ញវត្ថុទទួលប្រាក់បញ្ញើ ,Depository microfinance institutions,010202,គ្រឹះស្ថានមីក្រូហិរញ្ញវត្ថុទទួលប្រាក់បញ្ញើ ,Depository microfinance institutions,0102,គ្រឹះស្ថានហិរញ្ញវត្ថុទទួលប្រាក់បញ្ញើ ,Depository Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010203001,គ្រឹះស្ថានដាក់ប្រាក់ផ្សេងទៀត,Other depository institutions,010203, គ្រឹះស្ថានដាក់ប្រាក់ផ្សេងទៀត,Other depository institutions,0102,គ្រឹះស្ថានហិរញ្ញវត្ថុទទួលប្រាក់បញ្ញើ ,Depository Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010301001,ធនាគារឯកទេស ,Specialized Banks,010301,ធនាគារឯកទេស ,Specialized banks,0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010302001,គ្រឹះស្ថានមីក្រូហិរញ្ញវត្ថុមានអាជ្ញាប័ណ្ណ ,Licensed microfinance institutions,010302,គ្រឹះស្ថានមីក្រូហិរញ្ញវត្ថុមានអាជ្ញាប័ណ្ណ ,Licensed microfinance institutions,0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010303001,ការធានារ៉ាប់រងអាយុជីវិត ,Life insurance,010303,ក្រុមហ៊ុនធានារ៉ាប់រងជីវិត ,Life insurance,0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010304001,ការធានារ៉ាប់រងមិនមែនអាយុជីវិត ,Non-life insurance,010304,ក្រុមហ៊ុនធានារ៉ាប់រងទូទៅ ,General insurance,0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010305001,មូលនិធិសោធននិវត្តន៍ ,Pension funding,010305,មូលនិធិសោធននិវត្ត ,Pension funds,0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010306001,ផ្សារមូលបត្រ ,"Security Contract Exchange, Securities Exchange",010306,ផ្សារហ៊ុន និង ឈ្មួញកណ្តាល មូលបត្រ ,Stock exchange and stockbrokers,0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010306002,ពាណិជ្ជករអន្តរការី ជើងសារ និងអ្នកធានាទិញមូលបត្រ ,"Traders, brokers, brokers and underwriters",010306,ផ្សារហ៊ុន និង ឈ្មួញកណ្តាល មូលបត្រ ,Stock exchange and stockbrokers,0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307001,មូលនិធិវិនិយោគ មូលនិធិ និងស្ថាប័នហិរញ្ញវត្ថុប្រហាក់ប្រហែល,"Investment funds, funds and similar financial institutions",010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307002,សកម្មភាពភតិសន្យាហិរញ្ញវត្ថុ ,Financial leasing activities ,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307003,ក្រុមហ៊ុន ឬហាងទទួលបញ្ចាំ ,Pawn shop,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307004,អ្នកចងការប្រាក់ ,Money lender,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307005,ភ្នាក់ងារផ្តល់ឥណទានផ្សេងទៀត ដែលពុំបានរាប់បញ្ចូល ,Other credit agencies n.e.c.,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307006,សេវាកម្មប្តូរប្រាក់ ,Money-changing services ,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307007,សេវាកម្មផ្ទេរប្រាក់មិនមែនធនាគារ ,Non-bank remittance services,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307008,ក្រុមហ៊ុនមូលធនឯកជន រាប់បញ្ចូលទាំងក្រុមហ៊ុនផ្តល់ទុន,"Private equity firms, including financiers",010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307009,ការិយាល័យតំណាងរបស់ធនាគាបរទេស ,Representative office of foreign banks,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307010,សកម្មភាពសេវាកម្មហិរញ្ញវត្ថុផ្សេងទៀត លើកលែងតែសកម្មភាពធានារ៉ាប់រង និងមូលនិធិសោធននិវត្តន៍ ដែលពុំ,Other financial services activities except insurance activities and non-pension funds,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307011,ការធានារ៉ាប់រងបន្ត ,Re-insurance,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307012,ផ្សារវត្ថុធាតុដើម ,"Commodity Contract Exchange, Commodity exchange",010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307013,កិច្ចសន្យាវត្ថុធាតុដើម ឬអន្តរការីកម្មវត្ថុធាតុដើម ,Raw material contract or raw material intermediary,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307014,ពាណិជ្ជករ និងអន្តរការីលោហធាតុមាស ,Gold bullion brokers and dealers,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307015,សកម្មភាពផ្សេងទៀតដែលគាំទ្រដល់សកម្មភាពសេវាកម្ម,Other activities that support service activities,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307016,ការស៊ើបអង្កេតការខាតបង់ផ្នែកធានារ៉ាប់រង ,Insurance loss adjustment,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307017,សកម្មភាពរបស់ភ្នាក់ងារធានារ៉ាប់រង ,Activities of insurance agents,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307018,សកម្មភាពរបស់ឈ្មួញកណ្តាលធានារ៉ាប់រង,Activities of insurance brokers,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307019,សកម្មភាពផ្សេងទៀតគាំទ្រដល់សេវាកម្មធានារ៉ាប់រង និង,Other activities support insurance services and,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307020,សកម្មភាពគ្រប់គ្រងមូលនិធិ ,Fund management activities,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307021,អង្គការដែលមានសកម្មភាពសេវាកម្មហិរញ្ញវត្ថុ មិនមានអាជ្ញាប័ណ្ណ ,Unregistered NGOs engaged in financial activities,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307022,ការិយាល័យតំណាងហិរញ្ញវត្ថុ,Financial representative offices,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307023,ធនាគារវិនិយោគ ,Investment banks,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  010307024,សេវាកម្មប្តូរប្រាក់ និងផ្ទេរប្រាក់ ,Money exchange and money transfer,010307,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀតដែលមិនមានរៀបរាប់ខាងលើ ,"Other financial institutions, not listed above",0103,គ្រឹះស្ថានហិរញ្ញវត្ថុផ្សេងទៀត ,Other Financial Institutions,01,វិស័យ ហិរញ្ញវត្ថុ,Financial
  020101001,ការដាំដុះពោត ,Growing of maize,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101002,ការដាំដុះដំណាំសណ្តែកបន្លែ ,Growing of leguminous crops,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101003,ការដាំដុះសណ្តែកប្រេង ,Growing of oil seeds,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101004,ការដាំដុះដំណាំធញ្ញជាតិ ដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Growing of other cereals n.e.c.,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101005,ការដាំដុះស្រូវ ,Growing of paddy,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101006,ការដាំដុះបន្លែយកដើម និងស្លឹក ,Growing of leafy or stem vegetables,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101007,ការដាំដុះបន្លែយកផ្លែ ,Growing of fruits bearing vegetables,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101008,ការដាំដុះដំណាំអម្បូរត្រសក់ផ្អែម ,Growing of melons,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101009,ការដាំដុះផ្សិត ,Growing of mushrooms,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101010,ការដាំដុះបន្លែគ្រាប់ ,Growing of vegetables seeds,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101011,ការដាំដុះបន្លែផ្សេងទៀត ,Growing of other vegetables,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101012,ការដាំដុះដំណាំយកឬស ឬមើម ,"Growing of other roots, tubers, bulb or tuberous vegetables",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101013,​ការដាំដុះអំពៅ ,Growing of sugar cane,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101014,​ការដាំដុះថ្នាំជក់ ,Growing of tobacco,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101015,​ការដាំដុះកប្បាស និងដំណាំសរសៃដទៃទៀត ,Growing of cotton and other fibre crops,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101016,​ការដាំដុះ រាប់ទាំងផលិតកម្មផ្កាដែលកាត់ពីដើម ក្រពុំ ផ្កា ,Cultivation includes the production of flowers cut from flowering plants.,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101017,​ការដាំដុះសាគូ ,Growing of sago or rumbia,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101018,​ការដាំដុះដំណាំអាយុកាលខ្លីដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Growing of other non-perennial crops n.e.c.,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101019,​ការដាំដុះទំពាំងបាយជូរ ,Growing of grapes,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101020,​ការដាំដុះចេក ,Growing of banana,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101021,​ការដាំដុះស្វាយ ,Growing of mango,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101022,​ការដាំដុះធុរេន ,Growing of durian,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101023,​​ការដាំដុះសាវម៉ាវ ,Growing of rambutan,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101024,​​ការដាំដុះមៀន ,Growing of longan,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101025,​​ការដាំដុះល្ហុង ,Growing of papaya,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101026,​​ការដាំដុះម្នាស់ ,Growing of pineapple,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101027,​​ការដាំដុះស្រកានាគ ,Growing of pitaya or dragon fruit,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101028,​​ការដាំដុះផ្លែឈើតំបន់ត្រូពិច និង អនុតំបន់ត្រូពិចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Growing of Cultivation of tropical and other subtropical fruits excluded,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101029,​​ការដាំដុះក្រូចថ្លុង ,Growing of pomelo,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101030,​​ការដាំដុះក្រូចឆ្មារ ,Growing of lemons and limes,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101031,​​ការដាំដុះក្រូចឃ្វិច និងក្រូចពោធិ៍សាត់ ,"Growing of oranges, tangerines and mandarins",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101032,​​ការដាំដុះដំណាំក្រូចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Growing of other citrus fruits n.e.c.,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101033,​​ការដាំដុះត្របែក ,Growing of guava,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101034,​​ការដាំដុះដំណាំហូបផ្លែ និងមានគ្រាប់ដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Growing of other pome fruits and seeds not included ,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101035,​​ការដាំដុះដំណាំហូបផ្លែ ,Growing of berries,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101036,​​ការដាំដុះដំណាំហូបគ្រាប់ ,Growing of fruit seeds,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101037,​​​ការដាំដុះស្វាយចន្ទី និងគ្រាប់ផ្លែឈើដែលអាចហូបបាន​ ដទៃទៀត ,Growing of cashew and other edible nuts,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101038,​​​​ការដាំដុះដំណាំហូបផ្លែ ប្រភេទដើមឈើនិងចុល្លព្រឹក្ស ដទៃទៀត ,Growing of other tree and bush fruits,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101039,​​​​ការដាំដុះដូងប្រេង ចម្ការធំ និង ចម្ការតូច ,Growing of oil palm estate and smallholdings,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101040,​​​​ការដាំដុះដូង ចម្ការធំ និង ចម្ការតូច ,Growing of coconut estate and smallholdings,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101041,​ការដាំដុះកាហ្វេ ,Growing of coffee,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101042,​ការដាំដុះតែ ,Growing of tea,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101043,​ការដាំដុះកាកាវ ,Growing of cocoa,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101044,​ការដាំដុះដំណាំសម្រាប់ផលិតភេសជ្ជៈដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Growing of other beverage crops n.e.c.,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101045,ការដាំដុះម្រេច ,Growing of black pepper or piper nigrum,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101046,​ការដាំដុះម្ទេស ,Growing of chillies and peppers or capsicum spp.,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101047,​ការដាំដុះចន្ទន៍គ្រឹះស្នា ,Growing of nutmeg,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101048,​ការដាំដុះខ្ញី ,Growing of ginger,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101049,​ការដាំដុះរុក្ខជាតិប្រើជាចម្បងសម្រាប់ធ្វើទឹកអប់ឱសថ ឬថ្នាំ សម្លាប់សត្វល្អិត ថ្នាំសម្លាប់ផ្សិត ,"Growing Cultivation is mainly used for perfumes, herbs or pesticides, fungicides.",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101050,​ការដាំដុះរុក្ខជាតិគ្រឿងទេសនិងរុក្ខជាតិយកក្លិនដទៃទៀត​ដែលពុំបានរាប់បញ្ចូល ,Growing of Cultivation of Spices and Other Aromatic Plants Excluded,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101051,​ការដាំដុះកៅស៊ូ-ចម្ការធំ ,"Growing of rubber trees, Estate",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101052,​ការដាំដុះកៅស៊ូ-ចម្ការតូច ,"Growing of rubber trees, small holdings",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101053,​ការដាំដុះដើមឈើដើម្បីដកយករុក្ខរស ,Growing of trees for extraction of sap,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101054,​ការដាំដុះដើមត្នោត ,Growing of nipa palm,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101055,​ការដាំដុះដើមស្លា ,Growing of areca,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101056,​ការដាំដុះដើមរ៉ូហ្សែល ,Growing of roselle,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101057,​ការដាំដុះដំណាំអាយុកាលវែងដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Growing of other perennial crops n.e.c.,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101058,ការបណ្តុះរុក្ខជាតិដោយគ្រាប់ ,Growing of plants for planting,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101059,ការបណ្តុះរុក្ខជាតិដោយេវិធីសាស្រ្តដទៃទៀត ,Other plant propagation,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101060,ការដាំដុះដំឡូងមី ,Growing of cassava,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101061,ការធ្វើចំការចម្រុះ ,Mixed farming,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101062,​ការដាំដុះបន្លែ/ដំណាំរយៈពេលខ្លី ,Growing of horticulture crop,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101063,​ការដាំដុះរុក្ខជាតិលម្អ  ,Growing of ornamental Plant,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101064,ការចិញ្ចឹមការបង្កាត់ពូជនិងផលិតកម្មគោនិងក្របី ,"Raising, breeding and production of cattle or buffaloe",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101065,ផលិតកម្មទឹកដោះគោស្រស់ពីគោឬក្របី ,Production of raw milk from cows or buffaloes,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101066,ផលិតកម្មទឹកកាមគោឬក្របី ,Production of bovine semen,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101067,ការចិញ្ចឹមនិងការបង្កាត់ពូជសេះលា សេះទេសឬលាទេស ,"Raising and breeding of horses, asses, mules or hinnie",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101068,ការចិញ្ចឹមការបង្កាត់ពូជនិងផលិតកម្មចៀមនិងពពែ ,"Raising, breeding and production of sheep and goats",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101069,ការផលិតទឹកដោះស្រស់របស់សត្វចៀមនិងពពែ ,Production of raw sheep or goat milk,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101070,ការចិញ្ចឹម ការបង្កាត់ពូជនិងផលិតកម្មជ្រូក ,"Raising, breeding and production of swine, Pigs",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101071,ការចិញ្ចឹម ការបង្កាត់ពូជ និងផលិតកម្មកូនមាន់និងមាន់,"Raising, breeding and production of chicks and chickens",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101072,​ការចិញ្ចឹម ការបង្កាត់ពូជ និងផលិតកម្មទា ,"Raising, breeding and production of ducks",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101073,​ការចិញ្ចឹម ការបង្កាត់ពូជ និងផលិតកម្មក្ងាន ,"Raising, breeding and production of geese",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101074,​ការចិញ្ចឹម ការបង្កាត់ពូជបសុបក្សីដទៃទៀតដែលពុំបានរាប់,"Raising, breeding, other poultry, not counting",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101075,ផលិតកម្មស៊ុតមាន់ ,Production of chicken eggs,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101076,ផលិតកម្មស៊ុតទា ,Production of duck eggs,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101077,ផលិតកម្មស៊ុតបសុបក្សីដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Production of other poultry eggs n.e.c,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101078,ដំណើរការកន្លែចិញ្ចឹមសិប្បីសត្វ ដូចជា ខ្យង ។ល។ ,"Operation of worm farms, land mollusc farms, snail fa",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101079,ការចិញ្ខឹមដង្កូវនាង និងផលិតកម្មសម្បុកដង្កូវនាង ,Raising of silk worms and production of silk worm co,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101080,ការចិញ្ចឹមឃ្មុំ និងផលិតកម្មទឹកឃ្មុំនិងក្រមួនឃ្មុំ ,Bee keeping and production of honey and beeswax,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101081,ការចិញ្ចឹសត្វដទៃទៀតរាប់ទាំងសតកវប្លែកៗ និងសត្វមាន,"Raising other animals, including exotic animals and rich animals",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101082,សកម្មភាពកសិកម្មតាមការបង់ថ្លៃឈ្នួលជាក់ស្តែង ឬតាម,Agricultural activities based on actual wages or,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101083,សកម្មភាពគាំទ្រដល់ផលិតកម្មសត្វ​ តាមការបង់ថ្លៃឈ្នួល ,Activities to support paid animal production,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101084,ការរៀបចំផលដំណាំសម្រាប់ទីផ្សារបន្ទាប់ពីប្រមូលផលរួច ,"Preparation of crops for market, post-harvest",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101085,ការកែច្នៃគ្រាប់ពូជសម្រាប់បណ្តុះ ,Seed processing for propagation,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101086,ការ​ប្រមាញ់ ការដាក់អន្ទាក់ និងសកម្មភាពសេវាកម្មដែល,"Hunting, trapping and service activities",020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101087,ដាំដុះដំណាំផ្សេងៗ,Other crop production,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101088,ធ្វើចំការឈើហូបផ្លែផ្សេងៗ,Other fruit production,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101189,ចិញ្ចឹមសត្វស្លាបផ្សេងៗទៀត,Other poultry raisings,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020101190,ចិញ្ចឹមសត្វពាហនៈផ្សេងៗទៀត,Other animal raisings,020101,កសិកម្ម ,Agriculture,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020102001,វនវប្បកម្ម​ រាប់បញ្ចូលទាំងការដាំដុះដើមឈើ ,"Silviculture, including planting of trees",020102,រុក្ខាប្រម៉ាញ់ ,Forestry,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020102002,ការកាប់ឈើ ,Logging,020102,រុក្ខាប្រម៉ាញ់ ,Forestry,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020102003,ការប្រមូលអនុផលព្រៃឈើ ,Gathering of non-wood forest products.,020102,រុក្ខាប្រម៉ាញ់ ,Forestry,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020102004,សេវាកម្មគាំទ្រដល់សកម្មភាពរុក្ខកម្ម ,Support service to forestry,020102,រុក្ខាប្រម៉ាញ់ ,Forestry,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103001,ការចាប់ត្រីសមុទ្រ ,Marine fish catching,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103002,ការចាប់បង្គា ,Shrimp catching,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103003,ការចាប់ក្តាមសមុទ្រ ,Sea crab catching,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103004,ការចាប់ត្រីមឹក ,"Squid, cuttlefish, catching",020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103005,ការប្រមូលសម្បកសិប្បីសត្វសមុទ្រ និងគុជខ្យង ,Gathering of sea shells and pearls,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103006,ការនេសាទត្រីសមុទ្រដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Marine fishing n.e.c.,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103007,ការចាប់ត្រីទឹកសាប ,Freshwater fish catching,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103008,ការចាប់បង្កងទឹកសាប បង្គា និងសត្វអម្បូរសម្បករឹងដទៃទៀត ,"Taking of freshwater crayfish, shrimp and other crustaceans",020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103009,ការនេសាទត្រីទឹកសាបដទៃទៀត ដែលពុំបា​នរាប់បញ្ចូល ,Freshwater fishing n.e.c.,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103010,ការចិញ្ចឹមត្រីក្នុងទឹកសមុទ្រ ,Fish farming in sea water,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103011,ផលិតកម្មកូនសត្វពពួកគ្រំ-អ័យស្ទ័រ គ្រំចំពុះទា កូនបង្កង ,"Production of oysters - oysters, duck beaks, lobsters",020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103012,ការដាំដុះសារាយសមុទ្រនិងរុក្ខជាតិផ្សេងទៀតដែលអាច,Growing seaweed and other plants that can,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103013,ការចិញ្ចឹមសត្វអម្បូរសម្បករឹង ពពួគ្រំនិងសិប្បីសត្វផ្សេង,"Raising shellfish, shellfish and other livestock",020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103014,សកម្មភាពវារីវប្បកម្មនៅក្នុងទឹកភ្លាវ ,Aquaculture activities in brackish water,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103015,វារីវប្បកម្មក្នុងទឹកប្រៃដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Marine aquaculture n.e.c.,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103016,ការចើញ្ចឹមត្រីនៅក្នុងទឹកសាប ,Fish farming in freshwater,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103017,ការចិញ្ចឹមបង្គា បង្កងទឹកសាប នៅក្នុងទឹកសាប ,"Shrimp, crayfish  farming in freshwater",020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103018,ការចិញ្ចឹមក្រពើ,"Aquaculture of crocodiles, alligators",020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103019,វារីវប្បកម្មក្នុងទឹកសាបសម្រាប់តាំងលម្អ ,Ornamental freshwater aquaculture,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103020,ការចិញ្ចឹមកង្កែប ,Farming of frogs,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020103021,វារីវប្បកម្មក្នុងទឹកសាបដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Freshwater aquaculture n.e.c.,020103,នេសាទ ,Fishing,0201,កសិកម្ម រុក្ខាប្រម៉ាញ់ និង នេសាទ ,"Agriculture, Forestry and Fishing",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020201001,អាជីវកម្មរ៉ែធ្យូងថ្ម ,Mining of hard coal,020201,ការជីកយករ៉ែធ្យូងថ្មនិងលីលីត,Mining of coal and lignite,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020201002,អាជីវកម្មរ៉ែធ្យូងភក់ ពណ៌ត្នោត,Mining of lignite brown coal,020201,ការជីកយករ៉ែធ្យូងថ្មនិងលីលីត,Mining of coal and lignite,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020202001,ការយកប្រេងកាតឆៅ ,Extraction of crude petroleum,020202,ការទាញយកប្រេងឆៅនិងឧស្ម័នធម្មជាតិ,Extraction of crude petroleum and natural gas,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020202002,ការយកឧស្ម័នធម្មជាតិ,"Natural Gas, Extraction of natural gas",020202,ការទាញយកប្រេងឆៅនិងឧស្ម័នធម្មជាតិ,Extraction of crude petroleum and natural gas,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020203001,អាជីវកម្មរ៉ែដែក ,Mining of iron ores,020203,ការជីករ៉ែដែក,Mining of metal ores,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020203002,អាជីវកម្មរ៉ែសំណប៉ាហំាង ,Mining of tin ores,020203,ការជីករ៉ែដែក,Mining of metal ores,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020203003,អាជីវកម្មរ៉ែទង់ដែង ,Mining of copper,020203,ការជីករ៉ែដែក,Mining of metal ores,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020203004,អាជីវកម្មរ៉ែអាលុយមីញូមបុកស៊ីត ,"Mining of aluminium,bauxite",020203,ការជីករ៉ែដែក,Mining of metal ores,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020203005,អាជីវកម្មរ៉ែទីតានីញូមអុកស៊ីត ,"Mining of ilmenite, iron titanium oxide",020203,ការជីករ៉ែដែក,Mining of metal ores,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020203006,អាជីវកម្មរ៉ែលហៈដែលមិនមែនដែក ដទៃទៀតដែលពុំបាន,Other non-ferrous metal mining business,020203,ការជីករ៉ែដែក,Mining of metal ores,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204001,សកម្មភាពរុករក តម្រឹមត្រួសៗ និងអារ នូវផ្ទាំងថ្មនិងថ្ម,"Exploration activities, rough alignment and removal of rocks and boulders",020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204002,សកម្មភាពរុករក និងបំបែកថ្មកំបោរ ,"Quarrying, crushing and breaking of limestone",020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204003,សកម្មភាពជីកនិងបូមយកនូវ ខ្សាច់សម្រាប់ឧស្សាហកម្ម,Industrial sand digging and pumping activities,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204004,សកម្មភាពបំបែកថ្មនិងគ្រួស ,Breaking and crushing of stone and gravel,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204005,សកម្មភាពយកខ្សាច់ប្រភេទផ្សេងទៀត ,Quarrying of sand,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204006,សកម្មភាពយកដីឥដ្ឋ ដីឥដ្ឋរឹង និងដីឥដ្ឋសម្រាប់ធ្វើចាន ,"Mining of clays, refractory clays and kaolin",020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204007,សកម្មភាពយករ៉ែផូហ្វាតធម្មជាតិ ,Mining of natural phosphates,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204008,សកម្មភាពយករ៉ែបូរ៉ាត់ធម្មជាតិ រ៉ែម៉ាញេស្យូមស៊ុលហ្វាត,"Extraction of natural boron, magnesium sulphate",020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204009,សកម្មភាពយករ៉ែពណ៌ដី រ៉ែដែលមានធាតុកាល់ស្យូមហ្វ្លរ៉ាយ,Calcium fluoride mineral extraction,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204010,សកម្មភាពជីកយករុក្ខជាតិរលួយ-ដែលប្រើសម្រាប់ធ្វើជី,Digging for rotting plants - used for fertilizer,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204011,ការផលិតអំបិលដោយការហួតនៃទឹកសមុទ្រ ឬទឹកអំបិលផ្សេងទៀត។,Salt production by evaporation of sea water or other saline waters,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204012,សកម្មភាពបំបែក បន្សុទ្ធ និងរែងយកអំបិល,Purification and purification of salt,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204013,ការជីកយករ៉ែ និងថ្មក្រាហ្វិចធម្មជាតិ,Mining and quarrying of natural graphite,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204014,សកម្មភាពយករ៉ែត្បូងថ្មមានតម្លៃ ,Mining and quarrying of gemstones,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204015,សកម្មភាពផ្សេងទៀត នៃប្រត្តិបត្តិការនិងអាជីវកម្ម ,Other activities of operations and business,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204016,សកម្មភាពគាំទ្រ សម្រាប់ការយកប្រេងកាតឆៅ និងឧស្ម័ន,Support activities for crude oil and gas extraction,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020204017,សេវាគាំទ្រ ដោយផ្អែកលើការបង់ថ្លៃឈ្នួលឬតាមកិច្ចសន្យា,Support services based on fees or contracts,020204,ការជីកយករ៉ែនិងកន្លែងយកថ្មផ្សេងទៀត,Other mining and quarrying,0202,ឧស្សាហកម្មរ៉ែ ,Mining and Quarrying,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301001,សត្តឃាត និងការវេចខ្ចប់សាច់សាច់គោនិងសាច់ក្របី ,Slaughtering and packing of beef and buffalo,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301002,សត្តឃាត និងការវេចខ្ចប់សាច់ជ្រូក ,Slaughtering and packing of pork,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301003,សត្តឃាតនិងការវេចខ្ចប់សាច់ដែលពុំបានរាប់បញ្ចូល ,"Slaughtering and packing of meat, n.e.c",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301004,សត្តឃាត និងការវេចខ្ចប់សាច់មាន់ ,Slaughtering and packing of chicken,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301005,សត្តឃាត និងការវេចខ្ចប់សាច់ទា ,Slaughtering and packing of duck,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301006,សត្តឃាត និងការវេចខ្ចប់សាច់ក្រួច ,Slaughtering and packing of quail,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301007,សត្តឃាត និងការវេចខ្ចប់សាច់បក្សាបក្សីដែលពុំបានរាប់,Slaughter and packaging of uncounted poultry,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301008,ផលិតកម្មសាច់បង្កក ,Production of frozen meat,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301009,ផលិតកម្មសម្ងួតប្រឡាក់ឬឆ្អើរសាច់ ,"Production of dried, salted or smoked meat",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301010,ផលិតកម្មសាច់អាំង ,Production of grill meat,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301011,ផលិតកម្មផ្អកសាច់ ,Production of fermented meat,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301012,ផលិតកម្មសាច់ក្រក ,Production of sausages,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301013,ផលិតកម្មប្រហិត ,Production of meatball,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301014,ការកែច្នៃនិងការរក្សាសាច់និងផលិតផលសាច់សត្វបសុ,Processing and preservation of meat and poultry products,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301015,ការកែច្នៃនិងការថែរក្សាទុកសាច់ត្រីទុកដោយក្លាសេ ក្លាសេ,Processing and preservation of frozen fish,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301016,ផលិតកម្មសម្ងួតប្រឡាក់ឬឆ្អើរត្រី ,"Production of dried, salted or smoked fish",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301017,ផលិតកម្មប្រហុកផ្អក ,Production of fermented fish,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301018,ផលិតកម្មប្រហិតត្រី ,Production of fish meatball,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301019,ការកែច្នៃនិងការរក្សាទុកសាច់ត្រីនិងផលិតផលសាច់ត្រី,Processing and storage of fish meat and fish products,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301020,ផលិតផលត្រីខកំប៉ុង ,Production of canned fish,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301021,"ការកែច្នៃ និងការថែរក្សា សន្តវន្តសត្វ បង្កង ក្តាម​ និងសិប្បីសត្វ ខ្យង គ្រំ",Processing and preserving of crustanceans and molluscs,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301022,ផលិតកម្ម សន្តវន្តសត្វ និងសិប្បីសត្វកំប៉ុង ,Production of canned crustanceans and molluscs,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301023,ផលិតកម្ម និងការកែច្នៃសារ៉ាយសមុទ្រ ,Production and processing of seaweed,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301024,ផលិតកម្ម និងការកែច្នៃគ្រឿងសមុទ្រចំហុយ ,"Processing of steamed marine products,",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301025,ផលិតកម្មត្រីមុទ្រក្រៀម-បង្គារមឹក ,"Production of dry seafish,Shrimp, octopus",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301026,ផលិតកម្មកាពិ ,Production of shrimp paste,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301027,ការកែច្នៃនិងរក្សាទុកផលិតផលត្រីនិងគ្រឿងសមុទ្រ,Processing and storage of fish and seafood products,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301028,ការកែច្នៃនិងការរក្សាទុកផ្លែឈើ ,Processing and preserving of fruit,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301029,ការកែច្នៃនិងការរក្សាទុកបន្លែ ,Processing and preserving of vegetables,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301030,ការកែច្នៃនិងការរក្សាទុកគ្រាប់ផ្លែឈើក្រៀម ,Processing and preserving of roasted nuts,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301031,ការកែច្នៃនិងការរក្សាទុកផ្លែឈើនិងបន្លែដទៃទៀតដែលពុំ,Processing and storage of other fruits and vegetables that are not,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301032,ផលិតកម្មបន្លែច្រកកំប៉ុង ,Production of canned vegetables,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301033,ផលិតកម្មបន្លែច្រកកំប៉ុង ,Production of canned fruits,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301034,ផលិតកម្មទឹកផ្លែឈើ ,Production of fruit juices,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301035,ផលិតកម្មទឹកបន្លែ ,Production of vegetable juices,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301036,ផលិតកម្មផលិតផលសណ្តែកសៀតផ្អាប់ ,Production of fermented soya bean product,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301037,ផលិតកម្មតៅហ៊ូ ,Production of Tofu,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301038,ផលិតកម្មផលិតផលផ្លែឈើឬបន្លែដទៃទៀតដែលពុំបាន,Production of other fruits or vegetables that are not,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301039,កម្មន្តសាលប្រេងដែលបានពីបន្លែ ,Manufacture of vegetables oils,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301040,កម្មន្តសាលប្រេងដូង នំធ្វើពីសាច់ដូងស្ងួតអាហារ និងនំ,"Production of coconut oil, dried coconut cakes, food and cakes",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301041,កម្មន្តសាលប្រេងពីដូងប្រេង ,Manufacture of palm oil,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301042,កម្មន្តសាលប្រេងពោត ,Manufacture of corn oil,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301043,កម្មន្តសាលប្រេង និងខ្លាញ់ដែលបានពីស្ត ,Manufacture of animal oil and fats,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301044,កម្មន្តសាលប្រេង និងខ្លាញ់ដែលបានពីបន្លែនិងសត្វដទៃ,Production of oils and fats from vegetables and other animals,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301045,ការកែច្នៃទឹកដោះគោស្រស់និងកម្មន្តសាលនៃក្រែម ,Processing of fresh milk and manufacture of cream,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301046,កម្មន្តសាលទឹកដោះម្សៅនិងទឹកដោះគោខាប់ឬទឹកដោះគោ,Manufacturing milk powder and condensed milk or milk,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301047,កម្មន្តសាលការ៉េម ,Manufacture of ice cream,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301048,កម្មន្តសាលការ៉េមប្រេអប់ ទឹកកក ការ៉េមដើម និងទឹកកករសជាតិដទៃទៀត ,"Manufacture of sherbet, ice drop, ice candy and other flavoured ices",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301049,កម្មន្តសាលការ៉េម ការ៉េមប្រអប់ ទឹកកកអនាម័យ ការ៉េមដើម និងទឹកកករសជាតិដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,"Manufacture of other ice cream and sherbet, ice drop, ice candy and other flavoured ices, n.e.c",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301050,កម្មន្តសាលផលិតផលពីទឹកដោះគោដទៃទៀតដែលពុំបាន,Manufacture of other non-dairy products,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301051,ការកែច្នៃគ្រាប់ធញ្ញជាតិដែលបានកិនលើកលែងអង្ករ-ពោត ,Processing of grain milling except rice/corn,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301052,កម្ម​ន្តសាល ផលិផលពីការកិនគ្រាប់ធញ្ញជាតិដទៃទៀត,Production of other grain mills,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301053,កម្មន្តសាលម្សៅ ,Manufacture of starches,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301054,ម្មន្តសាលផលិតផលធ្វើពីម្សៅ ,Manufacture of starch products,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301055,កម្មន្តសាលអាមីដុងនិងផលិតផលធ្វើពីម្សៅអាមីដុង,Manufacture of starch and starch products,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301056,ការកិនស្រូវ ,Rice milling,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301057,ការកិនពោត ,Corn milling,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301058,កម្មន្តសាលម្សៅមីអង្ករ-ពោត ,Manufacture of rice/corn flour,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301059,កម្មន្តសាលនំបុ័ង ,Manufacture of bread,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301060,កម្មន្តសាលនំខេក-អាហារសម្រន់ ,Manufacture of cake or / and snack products,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301061,កម្មន្តសាលនំដុតដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,"Manufacture of other bakery products, n.e.c",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301062,កម្មន្តសាលស្ករត្នោត ,Manufacture of palm sugar,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301063,កម្មន្តសាលស្ករស ,Manufacture of refined sugar,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301064,កម្មន្តសាលស្ករដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,"Manufacture of other sugar, n.e.c",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301065,កម្មន្តសាលកាកាវសូកូឡានិងស្ករគ្រាប់ ,"Manufacture of cocoa, chocolate and sugar confectionery",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301066,កម្មន្តសាលគុយទាវ ,Manufacture of rice noodles,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301067,កម្មន្តសាកមី ,Manufacture of instant noodles,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301068,កម្មន្តសាលមីម៉ាការ៉ូនី មីសរសៃ មីកូស្កស និងផលិតផល,"Manufacturing of macaroni, microfibers and products",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301069,កម្មន្តសាលអាហាររៀបចំរួច និងអាហារវេចខ្ចប់ដាក់ចាន ,Manufacture of prepared meals and dishes,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301070,កម្មន្តសាលកាហ្វេ ,Manufacture of coffee,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301071,កម្មន្តសាលតែ ,Manufacture of tea,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301072,កម្មន្តសាលកាហ្វេតែនិងឱសថរុក្ខជាតិដែលពុំបានរាប់,"Countless coffee, tea and herbal remedies",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301073,កម្មន្តសាលគ្រឿងទេសដែលបានកែច្នៃ និងគ្រៀងផ្សំផ្សេងៗ ,Manufacture of processed spices and condiments,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301074,កម្មន្តសាលទឹកជ្រលក់ ,Manufacture of sauces,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301075,កម្មន្តសាលទឹកខ្មេះ ,Manufacture of vinegar,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301076,កម្មន្តសាលគ្រឿងទេសដែលបានកែច្នៃទឹកជ្រលក់ គ្រឿង,"Manufacture of processed spices, sauces, condiments",020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301077,កម្មន្តសាលផលិតផលចំណីអាហារផ្សេងទៀត ដែលពុំ,Manufacture of other food products,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301078,កម្មន្តសាលចំណីបសុបក្សី ,Manufacture of poultry feeds,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301079,កម្មន្តសាលចំណីជ្រូក ,Manufacture of pig feeds,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301080,កម្មន្តសាលចំណីត្រី ,Manufacture of fish feeds,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020301081,កម្មន្តសាលចំណីសត្វរៀបចំរួចដែលពុំបានរាប់បញ្ចូល ,Manufacture of prepared animal feeds n.e.c,020301,កម្មន្តសាលកម្មផលិតផលអាហារ ,Food products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302001,ការបិត ការបន្សុទ្ធ និងការលាយស្រាស្ពីរីត ,"Distilling, rectifying and blending of spirits",020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302002,កម្មន្តសាលស្រាល្បាកឃ្លីង-ស្រាពពុះ ,Wine made from mixed ingredients,020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302003,កម្មន្តសាលស្រាទឹកត្នោត ,Manufacture of Palm wine,020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302004,កម្មន្តសាលស្រាទំពាំងបាយជូរ ,Manufacture of Grape wine,020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302005,កម្មន្តសាលស្រា-វ៉ាញ ដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Manufacture of other wines n.e.c,020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302006,កម្មន្តសាលស្រាបៀរ ,Manufacture of Beer,020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302007,កម្មន្តសាលស្រាម៉ល់និងម៉ល់ដទៃទៀតដែលពុំបានរាប់,Unspecified liquor and mills,020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302008,កម្មន្តសាលភេសជ្ជៈគ្មានជាតិអាកុល ,Manufacture Soft Drink,020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302009,ការផលិតទឹកសូដា ,Manufacture Soda Water,020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302010,កម្មន្តសាលទឹកបរិសុទ្ធ ទឹករ៉ែ និងទឹកកក ,Manufacture of drinking water and mineral water,020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020302011,កម្មន្តសាលភេសជ្ជៈដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,"Manufacture of other beverages, n.e.c.",020302,កម្មន្តសាលកម្មភេសជ្ជៈ,Beverage manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020303001,កម្មន្តសាលបារីនិងស៊ីហ្គា ,Manufacture of cigarettes and cigars,020303,កម្មន្តសាលកម្មថ្នាំជក់ ,Tobacco manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020303002,កម្មន្តសាលផលិតផលថ្នាំជក់ដទៃទៀតដែលពុំបានរាប់,Manufacture of other tobacco products not counted,020303,កម្មន្តសាលកម្មថ្នាំជក់ ,Tobacco manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304001,ការរវៃវាយនភណ្ឌកប្បាស ,spinning of cotton textile,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304002,ការរវៃវាយនភណ្ឌសូត្រ ,spinning of silk textile,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304003,ការរៀបចំនិងការរវៃសរសៃអំបោះដទៃទៀតដែលពុំបាន,Preparation and twisting of other yarns that are not,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304004,តប្បាញកំណាត់កប្បាស ,Weaving of cotton textiles,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304005,តប្បាញកំណាត់សូត្រ ,Weaving of silk textiles,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304006,តម្បាញកំណាត់ដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Weaving of other textiles n.e.c,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304007,ការធ្វើសម្រេចវាយនភណ្ឌ ,Finishing of textiles,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304008,កម្មន្តសាលកំណាត់ចាក់ ,Manufacture of knitted fabrics,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304009,កម្មន្តសាលផ្ទាំងកំណាត់ចាក់ដោយម្ជុលច្រើន ឬមួយដែល,Manufactured with one or more needles,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304010,កម្មន្តសាលរបស់តុបតែងពីវាយនភណ្ឌលើកលែងសម្លៀក,Manufacture of textiles and clothing,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304011,កម្មន្តសាលកម្រាលព្រំកន្ទេល ,"Manufacture of rugs, mat",020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304012,កម្មន្តសាលកម្រាលព្រំនិងព្រំតូចៗដទៃទៀតដែលពុំបាន,Manufacturing carpets and other small rugs that are not,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304013,កម្មន្តសាលសំណាញ់ ,Manufacture of netting,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304014,កម្មន្តសាលខ្សែពួរធំ-សម្រាប់នាវា ខ្សែពួរខ្សែវេញ និង,"Large Rope Manufacturing - For Rope, Cord Rope and",020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020304015,កម្មន្តសាលវាយនភណ្ឌ ដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Manufacture of other textiles n.e.c.,020304,កម្មន្តសាលកម្មវាយនភ័ណ្ឌ ,Textile Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020305001,"កម្មន្តសាលសម្លៀកបំពាក់លើកលែងសម្លៀកបំពាក់ស្រាប់ ឬកាត់ ",Manufacture of wearing apparel except tailoring and dressmaking,020305,កម្មន្តសាលកម្មសំលៀកបំពាក់ ,Wearing apparel manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020305002,ការកាត់ដេរសម្លៀកបំពាក់បុរស និងរ៉ូបស្រ្តីបែបប្រពៃណី ,Custom tailoring and dressmaking for traditional wear,020305,កម្មន្តសាលកម្មសំលៀកបំពាក់ ,Wearing apparel manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020305003,ការកាត់ដេរសម្លៀកបំពាក់បុរស និងរ៉ូបស្រ្តីដទៃទៀតដែល,Tailoring of men's and women's clothing,020305,កម្មន្តសាលកម្មសំលៀកបំពាក់ ,Wearing apparel manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020305004,កម្មន្តសាលសម្ភារៈបន្ទាប់បន្សំដែលមានធាតុផ្សំចម្បងធ្វើ,Manufacture of secondary materials with main ingredients,020305,កម្មន្តសាលកម្មសំលៀកបំពាក់ ,Wearing apparel manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020305005,កម្មន្តសាលរបស់របរធ្វើពីរោមសត្វ ,Manufacture of articles of fur,020305,កម្មន្តសាលកម្មសំលៀកបំពាក់ ,Wearing apparel manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020305006,"កម្មន្តសាលសម្លៀកបំពាក់ចាក់ ដោយម្ជុលច្រើន ឬមួយ",Manufacture of knitted and crocheted apparel,020305,កម្មន្តសាលកម្មសំលៀកបំពាក់ ,Wearing apparel manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020306001,ការសម្លាប់ស្បែក និងការតុបតែងស្បែក ការតុបតែង និង,"Skin killing and skin decoration, makeup and",020306,កម្មន្តសាលកម្ម ផលិតផលស្បែក ,Leather products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020306002,កម្មន្តសាលវ៉ាលីកាបូបយួរដៃនិងកាបូបស្ពាយក្រោយ ,"Manufacture of luggage, handbags and backpack",020306,កម្មន្តសាលកម្ម ផលិតផលស្បែក ,Leather products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020306003,កម្មន្តសាលវ៉ាលីកាបូបយួរដៃនិងផលិតផលស្រដៀងកែប,"Manufacture of suitcases, handbags and similar products Kep",020306,កម្មន្តសាលកម្ម ផលិតផលស្បែក ,Leather products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020306004,កម្មន្តសាលស្បែកជើងធ្វើពីស្បែក ,Manufacture of leather footwear,020306,កម្មន្តសាលកម្ម ផលិតផលស្បែក ,Leather products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020306005,កម្មន្តសាលស្បែកជើងដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Manufacture of other footwear n.e.c,020306,កម្មន្តសាលកម្ម ផលិតផលស្បែក ,Leather products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020307001,ការអារឈើនិងការឈូសឈើ ,Sawmilling and planing of wood,020307,កម្មន្តសាលកម្មផលិតផលឈើ ,Wood products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020307002,កម្មន្តសាលចំនៀរឈើនិងបន្ទះឈើស្តើង ,Manufacture of veneer sheets and wood-based panels,020307,កម្មន្តសាលកម្មផលិតផលឈើ ,Wood products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020307003,កម្មន្តសាល ទ្វាបង្អួចនិងគ្រោង ,"Manufacture of doors,windows,shutter and frames",020307,កម្មន្តសាលកម្មផលិតផលឈើ ,Wood products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020307004,កម្មន្តសាលការ៉ូឈើសម្រាប់ធ្វើផ្ទៃក្រាល ,Manufacture of parquet floor blocks,020307,កម្មន្តសាលកម្មផលិតផលឈើ ,Wood products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020307005,កម្មន្តសាលឈើសំណង់ និងឈើដំណ ដទៃទៀតដែលពុំ,Manufacture of construction timber and other non-timber timber,020307,កម្មន្តសាលកម្មផលិតផលឈើ ,Wood products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020307006,កម្មន្តសាលធុងឈើ ,Manufacture of wooden containers,020307,កម្មន្តសាលកម្មផលិតផលឈើ ,Wood products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020307007,កម្មន្តសាលផលិតផលឈើផ្សេងទៀតកម្មន្តសាលរបស់,Manufacturing of other wood products Manufacturing of,020307,កម្មន្តសាលកម្មផលិតផលឈើ ,Wood products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020308001,កម្មន្តសាលកេសក្រដាស ,Manufacture of Paper case,020308,កម្មន្តសាលកម្មផលិតផលក្រដាស ,Paper manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020308002,កម្មន្តសាលក្រដាសសរសេរ ,Manufacture of writing Paper,020308,កម្មន្តសាលកម្មផលិតផលក្រដាស ,Paper manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020308003,កម្មន្តសាលក្រដាសនិងផលិតផលក្រដាសដទៃទៀតដែល,Manufacture of paper and other paper products,020308,កម្មន្តសាលកម្មផលិតផលក្រដាស ,Paper manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020308004,កម្មន្តសាលក្រដាសទឹករលក ក្រដាសកាតុង និងប្រអប់ធ្វើ,"Manufacture of corrugated paper, cardboard and boxes",020308,កម្មន្តសាលកម្មផលិតផលក្រដាស ,Paper manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020308005,កម្មន្តសាលរបស់របរផ្សេងទៀតធ្វើពីក្រដាស និងពីក្រដាស,Manufacture of other paper and paper products,020308,កម្មន្តសាលកម្មផលិតផលក្រដាស ,Paper manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020309001,ការបោះពុម្ព ,Printing,020309,បោះពុម្ភ ,Printing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020309002,សេវាកម្មទាក់ទងនឹងការបោះពុម្ព ,Service activities related to printing,020309,បោះពុម្ភ ,Printing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020309003,ការផលិតសារឡើងវិញ នូវឯកសារដែលបានថតចម្លងទុក ,Reproduction of recorded media,020309,បោះពុម្ភ ,Printing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310001,កម្មន្តសាលផលិតផលឡដុតធ្យូងភក់ ,Manufacture of coke oven products,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310002,កម្មន្តសាលផលិតផលកាកសំណល់ប្រេងកាតឆៅ,Manufacture of crude oil waste products,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310003,កម្មន្តសាលផលិតផលប្រេងកាតផ្សេងទៀត ,Manufacture of other petroleum products,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310004,កម្មន្តសាលអ៊ុកស៊ីសែននិងអ៊ិដ្រូហ្សែន អាសេទីឡែន ,"Manufacture of oxygen and hydrogen, C2H2",020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310005,កម្មន្តសាល គីមីមូលដ្ឋានដែលពុំបានរប់បញ្ចូល ,"Manufacture of basic chemicals ,n.e.c",020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310006,កម្មន្តសាល ជី និងសមាសធាតុនីត្រូហ្សែន ,Manufacture of fertilizers and nitrogen compounds,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310007,កម្មន្តសាល ប្លាស្ទិក និងកៅស៊ូសំយោគក្នុងទម្រង់បឋម ,Manufacture of plastics and synthetic rubber in primary forms,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310008,កម្មន្តសាល ថ្នាំកំចាត់សត្វចង្រៃ និងផលិតផលគីមីកសិ,Manufacture of pesticides and agrochemicals,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310009,"កម្មន្តសាលនៃថ្នាំលាបពណ៌ វែរនី ថ្នាំធ្វើឲ្យរលោង និងថ្នាំទ្រនាប់ប្រហាក់ប្រហែល ទឹកថ្នាំបោះពុម្ពនិងម៉ាស្ទិក ","Manufacture of paints, varnishes and similar coatings, printing ink and mastics",020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310010,កម្មន្តសាល សប៊ូដុំម្សៅសាប៊ូគ្រៅងសម្អាតនិងប៉ូលា,"Manufacture of soap, detergents, polishes and polishes",020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310011,កម្មន្តសាល កាំជ្រួចឮ ,Manufacture of firework,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310012,កម្មន្តសាល ផលិតផលគីមីដទៃទៀតដែលពុំបានរាប់,Manufacturing other chemical products not counted,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310013,កម្មន្តសាល សរសៃសំយោគ ,Manufacture of man-made fibres,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310014,កម្មន្តសាល ឱសថសារធាតុគីមីសម្រាប់ព្យាបាល,"Manufacturing of medicines, chemicals for treatment",020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310015,កម្មន្តសាល សំបកកង់ និង ពោះវៀនកង់និងការចាក់ពុម្ព,Manufacture of tires and casings and molding,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310016,កម្មន្តសាល នៃផលិតផលកៅស៊ូដទៃទៀត ,Manufacture of other rubber products,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310017,កម្មន្តសាល ផលិតផលធ្វើពីប្លាស្ទិក ,Manufacture of builders’ plastic wares,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310018,កម្មន្តសាល សម្ភារៈប្លាស្ទិកប្រើសម្រាប់ការវេចខ្ចប់ឥវ៉ាន់ ,Manufacture of plastics articles for the packaging of goods,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310019,កម្មន្តសាល ផលិតផលប្លាស្ទិកសម្រេច ,Manufacture of finished plastics products,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020310020,កម្មន្តសាល ផលិតផលប្លាស្ទិកដទៃទៀតដែលពុំបានរាប់,Manufacture of other plastic products not counted,020310,កម្មន្តសាលកម្មប្រេង ធ្យូងថ្ម វត្ថុធាតុគីមី ប៉ូលីម៊ែ និង កៅស៊ូ ,"Petroleum, coal, chemical, polymer and rubber manufacturing",0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311001,កម្មន្តសាល កញ្ចក់និងផលិតផលពីកញ្ចក់ ,Manufacture of glass and glass products,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311002,កម្មន្តសាល ផលិតផលធន់កម្តៅ ,Manufacture of refractory products,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311003,កម្មន្តសាល ក្បឿងប្រកដំបូល ,Manufacture of roofing tile,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311004,កម្មន្តសាល ឥដ្ឋ ,Manufacture of bricks,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311005,កម្មន្តសាល កម្រាលក្រាលធ្វើពីដីឥដ្ឋដុត ,Manufacture of flooring block in baked clay,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311006,កម្មន្តសាល​ សម្ភារៈសំណង់ធ្វើពីដីឥដ្ឋដទៃទៀតដែល,Manufacture of other clay building materials,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311007,កម្មន្តសាល ផលិតផលពីព័រសឺឡែន និងសេរាមិកដទៃ,Manufacture of porcelain and other ceramics,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311008,កម្មន្តសាល ស៊ីម៉ង់ត៍ ,Manufacture of cement,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311009,កម្មន្តសាល កំបោរ ,Manufacture of lime,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311010,កម្មន្តសាល ស៊ីម៉ង់កំបោរប្លាស្ទ័រដទៃទៀតដែលពុំបាន,Manufacture of other non-plaster plaster,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311011,កម្មន្តសាល របស់របរប្រើប្រាស់ធ្វើពីកំបោរ ស៊ីម៉ង់ត៍និងប្លាស្ត័រ ,"Manufacture of articles of lime, cement and plaster",020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311012,ការកាត់ សូន និងកែច្នៃផលិតផលធ្វើពីថ្ម ,"Cutting, shaping and finishing of stone",020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020311013,កម្មន្តសាលនៃផលិតផលរ៉ែអលោហៈ ដទៃទៀតដែលពុំ,Manufacture of other non-metallic mineral products,020311,កម្មន្តសាលកម្មសារធាតុខនិក និង មិនមែនលោហៈធាតុ ,Non-metallic minerals manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312001,កម្មន្តសាល ដែកមូលដ្ឋាននិងដែកថែប ,Manufacture of basic iron and steel,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312002,កម្មន្តសាល លោហធាតុមូលដ្ឋានមានតម្លៃ និងលោហ,Manufacturing of precious metals and metals,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312003,ការស្លចាក់ពុម្ពដែកនិងដែកថែប ,Casting of iron and steel,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312004,ការស្លចាក់ពុម្ពលោហធាតុមិនមែនដែក ,Casting of non ferrous metals,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312005,កម្មន្តសាល​ផលិតផលគ្រោងគ្រោងទ្វារគ្រោងបង្អួច ,"Manufacture of frameworks, framedoors , windows",020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312006,កម្មន្តសាល ស៊ុមរូបថតស៊ុមកញ្ចក់ ,"Manufacture of photo frame , mirror frame",020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312007,កម្មន្តសាល ផលិតផលគ្រឿងគ្រោងពីលោហធាតុ,Manufacture of metal products,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312008,កម្មន្តសាល ធុងអាងនិងកុងតេណឺពីលោហធាតុ ,"Manufacture of tanks, reservoirs and containers of metal",020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312009,កម្មន្តសាល ម៉ាស៊ីនបង្កើតចំហាយទឹក លើកលែងម៉ាស៊ីន,Manufacture of steam generators except engines,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312010,កម្មន្តសាល អាវុធនិងគ្រាប់រំសេវ ,Manufacture of weapons and ammunition,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312011,ការដំ ការសង្កត់ ការវាយកាត់ និងការកិនលោហធាតុជា,"Pressing, pressing, cutting and grinding of metals",020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312012,ប្រព្រឹត្តិកម្ម និងការពាសលោហធាតុ ការក្រឡឹង ,Treatment and coating of metals ; machining,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312013,កម្មន្តសាល គ្រឿងកាំបិតឧបករណ៍ដៃនិងគ្រឿងដែក,"Manufacture of knives, hand tools and metal accessories",020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312014,កម្មន្តសាល ធុងមានដៃយួរ កំប៉ុងធុងធំនិងកុងតេណឺ ស្រ,"Manufacture of portable containers, cans, containers and containers",020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312015,កម្មន្តសាល ផលិតផលខ្សែច្រវ៉ាក់រឺស័រនិងវិសមូល-,"Manufacturing of chains, springs and screws -",020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312016,កម្មន្តសាល ឧបករណ៍ប្រើប្រាស់ក្នុងផ្ទះ ,Manufacture of household appliances,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020312017,កម្មន្តសាល ផលិតផលពីលោហធាតុកែច្នៃដទឌទៀត,Manufacture of other metal products,020312,កម្មន្តសាលកម្មលោហៈធាតុ និង ផលិតផលលោហៈ ,Metal and metal products manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313001,កម្មន្តសាលនិង តំឡើងរថយន្ត ,Manufacture and/or assembly of motor vehicles,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313002,កម្មន្តសាលរឹម៉កសណ្តោង ,Manufacture of bodies of traller,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313003,ការផលិតតួយានយន្ត កម្មន្តសាលរឹម៉កសណ្តោងនិង,"Manufacture of chassis, trailers and trailers;",020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313004,កម្មន្តសាល គ្រឿងបន្ទាប់បន្សំ​ និងគ្រឿងបន្លាស់របស់,Manufacture of spare parts and accessories,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313005,ការសាងសង់កប៉ាល់ពាណិជ្ជកម្ម ,Building of commercial vessels,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313006,ការផលិតទូកនេសាទ ,Building of fishing boats,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313007,ការសាងសង់កប៉ាល់និងសំណង់បណ្តែតទឹកដទៃទៀត,Construction of ships and other floating structures,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313008,ការផលិតទូកកម្សាន្ត និងទូកកីឡា ,Building of pleasure and sporting boats,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313009,កម្មន្តសាល​ ក្បាលរថភ្លើង និងទូផ្ទុកទំនិញ ,Manufacture of railway locomotives and rolling stock,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313010,កម្មន្តសាល យន្តហោះយានអវកាស និងម៉ាស៊ីនដែលពាក់,"Manufacture of aircraft, spacecraft and wearable engines",020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313011,កម្មន្តសាលយានយន្តយោធាចម្បាំង ,Manufacture of military fighting vehicles,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313012,កម្មន្តសាលទោចក្រយានយន្ត ,Manufacture of motorcycles,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313013,កម្មន្តសាល ទោចក្រយាន ,Manufacture of bicycles,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313014,កម្មន្តសាលរទេះជនពិការ ,Manufacture of invalid carriages,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313015,កម្មន្តសាលទោចក្រយាន និងរទេះជនពិការដទៃទៀត,Manufacture of bicycles and other wheelchairs,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020313016,កម្មន្តសាលបរិក្ខារដឹកជញ្ជូនដទៃទៀតដែលពុំបានរាប់,Manufacturing other transport equipment not counted,020313,កម្មន្តសាលកម្មសំភារៈដឹកជញ្ជូន ,Transport equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314001,កម្មន្តសាល សន្ទះ និងបំពង់ អេឡិចត្រូនិក ,Manufacture of electronic valves and tubes,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314002,កម្មន្តសាល សឺមីកុងឌុចទ័រ និងគ្រឿងបង្គុំអេឡិចត្រូនិច,Manufacture of semiconductors and electronic components,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314003,កម្មន្តសាល និង តំឡើងកុំព្យូទ័រអេឡិចត្រូនិក ,Manufacture and/or assembly of electronic computers,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314004,កម្មន្តសាល គ្រឿងបន្លាស់កុំព្យូទ័រ ,Manufacture of computer peripheral equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314005,កម្មន្តសាល បរិក្ខាទូរគមនាគមន៍-លើកលែងបរិក្ខាទូរគម,Manufacture of telecommunication equipment - except telecommunication equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314006,កម្មន្តសាល បរិក្ខារទូរគមនាគមន៍ឥតខ្សែ ,Manufacture of wireless communications equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314007,កម្មន្តសាល បរិក្ខារទូរគមនាគមន៍ដទៃទៀតដែលពុំបាន,Manufacturing other telecommunication equipment that is not,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314008,កម្មន្តសាល និង តំឡើងទូរទស្សន៍ ,Manufacture and/or assembly of televisions,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314009,កម្មន្តសាល បរិក្ខារថតសំឡេងនិងរូបភាព បរិក្ខារទទួល,Manufacturing Audio and video recording equipment Receiving equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314010,កម្មន្តសាល គ្រឿងអេឡិចត្រូនិក ដទៃទៀតដែលពុំបាន,Manufacturing other electronics that do not,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314011,កម្មន្តសាល បរិក្ខាររង្វាស់ ធ្វើតេស្ត រកទិស និង ត្រួតពិនិត្យ ,"Manufacture of measuring, testing, navigating and control equipment",020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314012,កម្មន្តសាល និឡិកាដៃ និងនាឡិកាព្យួរជញ្ជាំង ,Manufacture of watches and clocks,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314013,កម្មន្តសាល បំភាយកាំរស្មី អេឡិចត្រូវេជ្ជសាស្រ្ត និង,Manufacturing of medical and electromagnetic radiation,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314014,កម្មន្តសាល ឧបករណ៍ថតរូប ,Manufacture of photographic equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314015,កម្មន្តសាល ឧបករណ៍អុបទិកនិងឧបករណ៍ថតរូបដទៃ,Manufacture of optical and photographic equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314016,កម្មន្តសាល ឧបករណ៍ផ្សព្វផ្សាយដោយម៉ាញេទិក,Manufacturing Magnetic Media,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314017,​កម្មន្តសាល ម៉ូទ័រអគ្គិសនី ម៉ាស៊ីនភ្លើង ត្រង់ស្វូ និងកុំប្លេ,"Manufacturing of electric motors, generators, transformers and computers",020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314018,កម្មន្តសាល បរិធានចែកចាយអគ្គិសនី និងត្រួតពិនិត្យ,Manufacture of electrical distribution and control equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314019,កម្មន្តសាល ថ្មពិល និងអាគុយ ,Manufacture of batteries and accumulators,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314020,កម្មន្តសាល ខ្សែកាបសរសៃអុបទិក ,Manufacture of fibre optic cables,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314021,កម្មន្តសាល ខ្សែកាបអេឡិចត្រូនិក ,Manufacture of electronic cable,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314022,កម្មន្តសាល ខ្សែភ្លើង និងខ្សែកាបអេឡិចត្រូនិក និងអគ្គិស,Manufacture of electrical and electronic wiring and cables,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314023,កម្មន្តសាល គ្រឿងតខ្សែភ្លើង ,Manufacture of wiring devices,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314024,កម្មន្តសាល បរិក្ខារអគ្គិសនីបំភ្លឺ ,Manufacture of electric lighting equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314025,កម្មន្តសាល គ្រឿងអគ្គិសនីសម្រាប់ប្រើប្រាស់ក្នុងផ្ទះ ,Manufacture of domestic electric appliances,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314026,កម្មន្តសាល គ្រឿងអគ្គិសនីកម្តៅ ប្រើប្រាស់ក្នុងផ្ទះ ,Manufacture of domestic electrothermic appliances,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314027,កម្មន្តសាល បរិក្ខារប្រើប្រាស់សម្រាប់ចម្អិនអាហារ និង,Manufacturing of cooking utensils and,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314028,កម្មន្តសាល បរិក្ខារអគ្គិសនីប្រើប្រាស់ក្នុងផ្ទះ ដទៃទៀត,Manufacturing of other home appliances,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314029,កម្មន្តសាល បរិក្ខាអគ្គិសនីដទៃទៀត ,Manufacture of other electrical equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314030,កម្មន្តសាល ម៉ាស៊ីន និងទួរបីន លើកលែងយន្តហោះ ,"Manufacture of engines and turbines, except aircraft",020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314031,កម្មន្តសាល បរិក្ខារថាមពលដើរដោយវត្ថុរាវ ឬឧស្ម័ន ,Manufacture of fluid power equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314032,កម្មន្តសាល ស្នប់ កុំប្រេសស័រ រ៉ូប៊ីណេ និង វ៉ានបិទបើក,"Manufacturing Compressors, faucets and throttles",020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314033,កម្មន្តសាល ប៉ាដាង រ៉ូឡឺម៉ង់ ពីញុង សំណុំពីញុង និង,Manufacturing Padang Roman Pi Nhong Set Pi Nhong and,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314034,កម្មន្តសាល ឡចម្អិននិងប្រដាប់ដុតបញ្ចេះឡ ,"Manufacture of ovens, furnaces and furnace burners",020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314035,កម្មន្តសាល បរិក្ខារលើកដាក់ និងយួរ ,Manufacture of lifting and handling equipment,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314036,កម្មន្តសាល គ្រឿងម៉ាស៊ីន និងបរិក្ខារការិយាល័យនិង,Manufacturing of machinery and office equipment and,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314037,កម្មន្តសាល ឧបករណ៍ដៃដើរដោយថាមពល ,Manufacture of power-driven hand tools,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314038,កម្មន្តសាល គ្រឿងម៉ាស៊ីនប្រើប្រាស់ទូទៅច្រើនមុខដទៃ,Manufacture of other general machinery,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314039,កម្មន្តសាល ម៉ាស៊ីនកសិកម្មនិងរុក្ខកម្ម ,Manufacture of agricultural and forestry machinery,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314040,កម្មន្តសាល គ្រឿងម៉ាស៊ីនធ្វើរាងសណ្ឋានលោហធាតុ,Manufacture of metal forming machinery,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314041,កម្មន្តសាល គ្រឿងម៉ាស៊ីនប្រើក្នុងលោហកម្ម ,Manufacture of machinery for metallurgy,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314042,កម្មន្តសាល គ្រឿងម៉ាស៊ីនសម្រាប់ធ្វើអាជីវកម្មរ៉ែយកថ្ម,Manufacture of machinery for mining,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314043,កម្មន្តសាល ម៉ាស៊ីនសម្រាប់កែច្នៃអាហារភេសជ្ជៈនិងថ្នាំ​,"Manufacturing of food, beverage and medicine processing machinery",020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314044,កម្មន្តសាល ម៉ាស៊ីនវាយនភ័ណ្ឌផលិតកម្មសម្លៀកបំពាក់,"Manufacture of textiles, apparel, garment manufacturing",020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020314045,កម្មន្តសាល គ្រឿងម៉ាស៊ីនសម្រាប់គោលបំណងពិសេស​,Manufacture of machinery for special purposes,020314,កម្មន្តសាលកម្មគ្រឿងចក្រ និង ទិព្វសំភារៈ ,Machinery and equipment manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020315001,កម្មន្តសាលគ្រឿងសង្ហារឹមធ្វើពីឈើ ,Manufacture of wood furniture,020315,កម្មន្តសាលកម្មគ្រឿងសង្ហារឹម ,Furniture Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020315002,កម្មន្តសាលគ្រឿងសង្ហារឹមធ្វើពីបេតុង ,Manufacture of mental furniture,020315,កម្មន្តសាលកម្មគ្រឿងសង្ហារឹម ,Furniture Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020315003,កម្មន្តសាលគ្រឿងសង្ហារឹមធ្វើពីដែក ,Manufacture of rattan furniture,020315,កម្មន្តសាលកម្មគ្រឿងសង្ហារឹម ,Furniture Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020315004,កម្មន្តសាលគ្រឿងសង្ហារឹមធ្វើសាឡុង ,Manufacture of sofa,020315,កម្មន្តសាលកម្មគ្រឿងសង្ហារឹម ,Furniture Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020315005,កម្មន្តសាលគ្រឿងសង្ហារឹមដទៃទៀតដែលពុំបានរាប់,Other furniture counts not counted,020315,កម្មន្តសាលកម្មគ្រឿងសង្ហារឹម ,Furniture Manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020316001,"ការជួសជុលបរិក្ខារដឹកជញ្ជូន លើកលែងតែយានយន្តផ្សេងៗទៀត","Repair of transport equipment, except motor vehicles",020316,ជួសជុលនិងតំឡើងគ្រឿងចក្រនិងឧបករណ៍ ,Repair and installation of machinery and equipment,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020316002,ការដំឡើងគ្រឿងម៉ាស៊ីននិងគ្រឿងបរិក្ខារម៉ាស៊ីន ,Installation of industrial machinery and equipment,020316,ជួសជុលនិងតំឡើងគ្រឿងចក្រនិងឧបករណ៍ ,Repair and installation of machinery and equipment,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020316003,ការជួសជុលបរិក្ខារអគ្គិសនី ,Repair of electrical equipment,020316,ជួសជុលនិងតំឡើងគ្រឿងចក្រនិងឧបករណ៍ ,Repair and installation of machinery and equipment,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020316004,ការជួសជុលឧបករណ៍អេឡិចត្រូនិកនិងអុបទិក ,Repair of electronic and optical equipment,020316,ជួសជុលនិងតំឡើងគ្រឿងចក្រនិងឧបករណ៍ ,Repair and installation of machinery and equipment,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020316005,ការជួសជុលផលិតផលលោហធាតុកែច្នៃ ,Repair of fabricated metal products,020316,ជួសជុលនិងតំឡើងគ្រឿងចក្រនិងឧបករណ៍ ,Repair and installation of machinery and equipment,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020316006,ការជួសជុលគ្រឿងម៉ាស៊ីន ,Repair of machinery,020316,ជួសជុលនិងតំឡើងគ្រឿងចក្រនិងឧបករណ៍ ,Repair and installation of machinery and equipment,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020316007,ការជួសជុលឧបករណ៍ដទៃផ្សេងទៀត ,Repair of other equipment,020316,ជួសជុលនិងតំឡើងគ្រឿងចក្រនិងឧបករណ៍ ,Repair and installation of machinery and equipment,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317001,កម្មន្តសាលរតនភ័ណ្ឌនិងរបស់របរពាក់ព័ន្ធដែលធ្វើពីមាស ,Manufacture of jewellery and related articles made of gold,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317002,កម្មន្តសាលរតនភ័ណ្ឌនិងរបស់របរពាក់ព័ន្ធដែលធ្វើពីប្រាក់ ,Manufacture of jewellery and related articles made of silver,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317003,កម្មន្តសាលរតនភ័ណ្ឌនិងរបស់របរពាក់ព័ន្ធដែលធ្វើពីថ្ម ,Manufacture of jewellery and related articles made of precious stone,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317004,កម្មន្តសាលរតភ័ណ្ឌ និងរបស់របរពាក់ព័ន្ធដែលធ្វើពីវត្ថុ,Manufacturing of jewelery and related items made of objects,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317005,កម្មន្តសាលគ្រឿងអលង្ការកាឡៃនិងអលង្ការស្រដៀងគ្នា ,Manufacture of costume jewellery and related articles,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317006,កម្មន្តសាលឧបករណ៍តន្រ្តីប្រពៃណី ,Manufacture of traditional musical instruments,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317007,កម្មន្តសាលឧបករណ៍តន្រ្តីដទៃទៀតដែលពុំបានរាប់,Other musical instruments not counted,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317008,កម្មន្តសាលសម្ភារៈកីឡា ,Manufacture of sports goods,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317009,កម្មន្តសាលហ្គេមនិងប្រដាប់ប្រដាក្មេងលេង ,Manufacture of games and toys,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317010,កម្មន្តសាលឧបករណ៍ និងគ្រឿងផ្គត់ផ្គង់សម្រាប់វេជ្ជ,Manufacture of medical equipment and supplies,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020317011,កម្មន្តសាលដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Other manufacturing n.e.c.,020317,កម្មន្តសាលកម្មផ្សេងៗ ,Other manufacturing,0203,កម្មន្តសាលកម្ម ,Manufacturing,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020401001,ការប្រតិបត្តិការរោងចក្រផលិតថាមពលអគ្គីសនី ,Operation of generation facilities that produce electric energy,020401,អគ្គិសនី ,Electricity,0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020401002,ការប្រតិបត្តិការនៃបញ្ចូលថាមពលអគ្គីសនី ,Operation of transmission of electricity,020401,អគ្គិសនី ,Electricity,0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020401003,ការប្រតិបតិ្តការនៃការចែកចាយនិងលក់ថាមពលអគ្គីសនី ,Operation of distribution and sales of electricity,020401,អគ្គិសនី ,Electricity,0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020402001,ការផលិតឧស្ម័ន និងការចែកចាយឥន្ធនៈឧស្ម័នតាម,Gas production and distribution of gaseous fuels,020402,ឧស្ម័ន ,Gas,0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020402002,ការផ្គត់ផ្គង់ចំហាយទឹក និងប្រព័ន្ធខ្យល់ត្រជាក់ ,Steam and air conditioning supply,020402,ឧស្ម័ន ,Gas,0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020403001,ការបន្សុទ្ធ និងការចែកចាយទឹកសម្រាប់ការផ្គត់ផ្គង់ទឹកស្អាត ,Purification and distribution of water for water supply purposes,020403,ទឹកស្អាត និង បណ្តាញលូ ,"Water, sewerage, and drainage",0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020403002,ប្រព័ន្ធទឹកស្អុយនិងសកម្មភាពស្រដៀងគ្នា ,Sewerage and similar activities,020403,ទឹកស្អាត និង បណ្តាញលូ ,"Water, sewerage, and drainage",0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020404001,"ការប្រមូលកាកសំណល់រឹង ដែលគ្មានគ្រោះថ្នាក់ ដូចជាសំរាម","Collection of non-hazardous solid waste, i.e. garbage",020404,ការប្រមូលកាកសំណល់ បន្សុត និង សំណល់ចោល ,"Waste collection, treament and disposal",0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020404002,ការប្រមូលកាកសំណល់ដែលមានគ្រោះថ្នាក់ ,Collection of hazardous waste,020404,ការប្រមូលកាកសំណល់ បន្សុត និង សំណល់ចោល ,"Waste collection, treament and disposal",0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020404003,ការធ្វើប្រព្រឹត្តកម្មសម្អាត និងបញ្ចញចោលកាកសំណល់ ,Wastewater treatment and disposal,020404,ការប្រមូលកាកសំណល់ បន្សុត និង សំណល់ចោល ,"Waste collection, treament and disposal",0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020404004,ការកែច្នៃកាកសំណល់ ,Materials recovery,020404,ការប្រមូលកាកសំណល់ បន្សុត និង សំណល់ចោល ,"Waste collection, treament and disposal",0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020404005,សកម្មភាពប្រព្រឹត្តកម្មសម្អាត និងសេវាកម្ម គ្រប់គ្រង,Cleaning activities and management services,020404,ការប្រមូលកាកសំណល់ បន្សុត និង សំណល់ចោល ,"Waste collection, treament and disposal",0204,ការផ្គត់ផ្គង់សេវាសាធារណៈ ,Utilities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020501001,សំណង់អចលនទ្រព្យឧស្សាហកម្ម ឃ្លាំង យានដ្ឋាន និងមជ្ឈមណ្ឌលចែកចាយ ,"Construction of industrial property, warehourses, garages, distribution centres",020501,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យឧស្សាហកម្ម ,Property development: industry,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020501002,សំណង់អចលនទ្រព្យក្នុងតំបន់សេដ្ឋកិច្ច ,Construction of economic zones,020501,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យឧស្សាហកម្ម ,Property development: industry,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020501003,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យឧស្សាហកម្មផ្សេងទៀត ដែលពុំបានរាប់បញ្ចូល ,Other Industrial property development n.e.c,020501,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យឧស្សាហកម្ម ,Property development: industry,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020502001,សំណង់ហាងលក់ និងផ្សារទំនើប ,"Construction of stores, shopping malls, shops",020502,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យពាណិជ្ជកម្ម ,Property development: commercial,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020502002,សំណង់អគារការិយាល័យ និងការិយាល័យបម្រើសេវាកម្ម ,"Construction of office buidlings, serviced offices",020502,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យពាណិជ្ជកម្ម ,Property development: commercial,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020502003,សំណង់មជ្ឈមណ្ឌលវេជ្ជសាស្រ្ត មន្ទីរពេទ្យ និងផ្ទះថែទាំ ,"Construction of medical centres, hospitals, nursing homes",020502,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យពាណិជ្ជកម្ម ,Property development: commercial,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020502004,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យពាណិជ្ជកម្មផ្សេងទៀត ដែលពុំបានរាប់បញ្ចូល ,Other commercial property development n.e.c,020502,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យពាណិជ្ជកម្ម ,Property development: commercial,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020503001,អភិវឌ្ឍន៍សួនកំសាន្ត ,Development of parks,020503,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Property development: tourism related,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020503002,អភិវឌ្ឍន៍សណ្ឋាគារ ភោជនីយដ្ឋាន ហាងកាហ្វេ និងកន្លែងលេងកីឡា ,"Development of hotels, restuarants, cafes, and sport facilities",020503,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Property development: tourism related,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020503003,អភិវឌ្ឍន៍តំបន់ទេសចរណ៍បេតិកភ័ណ្ឌ ,Development of heritage tourism,020503,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Property development: tourism related,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020503004,អភិវឌ្ឍន៍តំបន់ទេសចរណ៍បៃតង ,Development of green tourism,020503,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Property development: tourism related,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020503005,អភិវឌ្ឍន៍តំបន់ទេសចរណ៍សម្រាប់សុខភាព ,Development of health tourism,020503,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Property development: tourism related,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020503006,អភិវឌ្ឍន៍រមណីយដ្ឋាន ,Development of resorts,020503,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Property development: tourism related,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020503007,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ផ្សេងទៀត ដែលពុំបានរាប់បញ្ចូល ,Other tourism-related property development n.e.c,020503,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Property development: tourism related,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020504001,អភិវឌ្ឍន៍អចលនវត្ថុ សាងសង់សម្រាប់លក់ ឬជួល,Real estate development for sale or rent,020504,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់លំនៅដ្ឋាន ,Property development: residential,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020505001,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យផ្សេងៗទៀត ,Property development: others,020505,អភិវឌ្ឍន៍អចលនទ្រព្យសម្រាប់វិស័យផ្សេងៗទៀត,Property development: others,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506001,សំណង់ផ្លូវ ថ្នល់ ស្ពាន និងផ្លូវក្រោមដី ,"Construction of streets, roads, highways, bridges, tunnels, and other public transport system",020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506002,សំណង់ផ្លូវដែក ,Construction of railways,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506003,សំណង់គម្រោងសេវាកម្មទឹកស្អាត ទឹកស្អុយ ប្រេង និងឧស្ម័ន ,"Construction of utility projects for water, sewage, oil and gas",020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506004,សំណង់គម្រោងសេវាកម្មអគ្គីសនី និងទូរគមនាគមន៍ ,Construction of utility projects for electricity and telecommunications,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506005,សំណង់ផ្លូវទឹក កំពង់ផែ ទំនប់ទឹក និងគម្រោងវិស្វកម្មនានា,"Construction of waterways, ports, dams and engineering projects",020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506006,អភិវឌ្ឍន៍ដីធ្លីឬទីតាំងក្រោមកិច្ចសន្យារបស់រដ្ឋ ,Real estate development under government's contract,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506007,សំណង់ទំនប់វារីអគ្គិសនី ,Construction of hydro-power,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506008,សំណង់រោងចក្រផលិតថាមពលធ្យូងថ្ម ,Construction of coal-power plants,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506009,សំណង់រោងចក្រផលិតថាមពលផ្សេងទៀត ដែលពុំបានរាប់បញ្ចូល ,Construction of other power generation plants n.e.c,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506010,សំណង់រោងចក្រផលិតថាមពលពីបន្ទះសូឡា ,Construction of solar panels,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506011,សំណង់បណ្តាញអគ្គិសនីនិងឧស្ម័ន ,Construction of electronic and gas networks,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506012,សំណង់រោងចក្របំលែងកាកសំណល់ទៅជាថាមពល ,Construction of waste-to-energy plants,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506013,សំណង់ទួរប៊ីនខ្យល់ ,Construction of wind turbines,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506014,សំណង់រោងចក្រផលិតជីវម៉ាស់ ,Construction of biomass biolers,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506015,សំណង់រោងចក្រផលិតជីវឧស្ម័ន ,Construction of biogas cogenerations,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506016,សំណង់រោងចក្រផលិតជីវឥន្ធនៈ ,Construction of biofuel plants,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506017,សំណង់រោងចក្រផលិតថាមពលពីកំដៅក្នុងផែនដី ,Construction of geothermal,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506018,សំណង់រោងចក្រថាមពលកកើតឡើងវិញផ្សេងទៀត ,Construction of other renewable energy plants,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506019,សំណង់ព្រលានយន្តហោះ ,Construction of airport,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506020,សំណង់ពហុកីឡដ្ឋាន ,Construction of stadium,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506021,សំណង់មន្ទីរពេទ្យ ,Construction of hospital,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506022,សំណង់សាលារៀន ,Construction of school,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020506023,សំណង់ធន់ធ្ងន់ផ្សេងទៀត ដែលពុំបានរាប់បញ្ចូល ,Other heavy construction n.e.c,020506,សំណង់ធន់ធ្ងន់ ,Heavy construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020507001,ការវាយកម្ទេច ឬបំផ្លាញ អាគារនិងរចនាសម្ព័ន្ធផ្សេងៗទៀត ,Demolition or wrecking of buildings and other,020507,ការរៀបចំដី ,Land management,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020507002,ការសម្អាតការដ្ឋានសំណង់សម្រាប់ការសាងសង់ ឬយករ៉ែ ,Clearing of sites for building or mining,020507,ការរៀបចំដី ,Land management,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020507003,ការបោសសម្អាតមីន ,Mine removal,020507,ការរៀបចំដី ,Land management,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020507004,ការរៀបចំដីផ្សេងទៀត ដែលពុំបានរាប់បញ្ចូល ,Other land management n.e.c,020507,ការរៀបចំដី ,Land management,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020508001,ការដំឡើងប្រព័ន្ធអគ្គីសនី ,Electrical installation,020508,សំណង់ផ្សេងៗទៀត,Other construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020508002,ការដំឡើងប្រព័ន្ធទឹក ប្រព័ន្ធម៉ាស៊ីនត្រជាក់ ប្រព័ន្ធកម្តៅ ,"Plumbing, heat and air-conditioning installation",020508,សំណង់ផ្សេងៗទៀត,Other construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020508003,ការដំឡើងសំណង់ដទៃទៀត ,Other construction installation,020508,សំណង់ផ្សេងៗទៀត,Other construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020508004,ការលាបថ្នាំនិងកិច្ចការពាក់ព័ន្ធ ,Painting and related work,020508,សំណង់ផ្សេងៗទៀត,Other construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020508005,ឥដ្ឋក្រាលជញ្ជាំង និងកម្រាល ឬក្រាលនិងសម្ភារៈផ្សេងៗ ,Floor and wall tiling or covering with other material,020508,សំណង់ផ្សេងៗទៀត,Other construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020508006,ផ្នែកជាងឈើ ,Carpentry,020508,សំណង់ផ្សេងៗទៀត,Other construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020508007,សកម្មភាពសាងសង់ឯកទេសដទៃទៀត ,Other specialized construction activities,020508,សំណង់ផ្សេងៗទៀត,Other construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020508008,សំណង់ផ្សេងៗទៀត ដែលពុំបានរាប់បញ្ចូល ,Other construction n.e.c,020508,សំណង់ផ្សេងៗទៀត,Other construction,0205,សំណង់ ,Construction,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601001,នាំចូលស្រូវ ,Import of paddy,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601002,នាំចូលអង្ករ ,Import of rice,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601003,នាំចូលស្រូវ និងអង្ករ ,Import of paddy and rice,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601004,នាំចូលម្សៅ គ្រាប់ធញ្ញជាតិ និងស្ករ ,"Import of flour, other grains and sugars",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601005,នាំចូលអង្ករ ម្សៅ គ្រាប់ធញ្ញជាតិ និងស្ករ ,"Import of rice, flour, other grains and sugars",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601006,នាំចូលបន្លែ និងផ្លែឈើស្រស់ ឬរក្សាទុកក្រៀម ,Import of fresh or preserved vegetables and fruits,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601007,នាំចូលសាច់ និងផលិតផលសាច់ រួមទាំងបក្សី,Import of meat and meat products including poultry,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601008,នាំចូលត្រី គ្រឿងសមុទ្រ និងផលិតផលដូចនេះ ,"Import of fish, other seafood and products thereof",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601009,នាំចូល ផលិតផលនំបុ័ង ,Import of bakery products,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601010,នាំចូលផលិតផលស្ករគ្រាប់ និងនំ ,Import of sugar confectionery,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601011,នាំចូលមី ស្បែក និងផលិតផលអាហារផ្សេងទៀត,Import skin noodles and other food products,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601012,នាំចូលផលិតផលដែលធ្វើពីទឹកដោះគោ ,Import of dairy products,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601013,នាំចូលនូវផលិតផលអាហារផ្សេងៗ ,Import of other food products n.e.c.,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601014,នាំចូលស្រាបៀរ ស្រា និងគ្រឿងស្រវឹងផ្សេងទៀត ,"Import of beer, wine and spirits",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601015,នាំចូលតែ កាហ្វេ និងភេសជ្ជៈផ្សេងទៀត ,"Import of tea, coffee and other beverages",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601016,នាំចូលភេសជ្ជៈ ទឹកច្រកដប និងទឹកកក ,"Import of soft drinks, bottled water, and ice",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601017,នាំចូលផលិតផលថ្នាំជក់និងថ្នាំជក់ ,Import of tobacco products & tobacco,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601018,នាំចូលរថយន្តថ្មី  ,Import of new motor vehicles,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601019,នាំចូលរថយន្តដែលប្រើប្រាស់រួច ,Import of used motor vehicles,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601020,នាំចូលរថយន្តថ្មីសម្រាប់ឧស្សាហកម្ម ពាណិជ្ជកម្ម ,Import new cars for commercial industry,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601021,នាំចូលរថយន្តប្រើរួចសម្រាប់ឧស្សាហកម្ម,Import used cars for industry,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601022,នាំចូលគ្រឿងបន្លាស់រថយន្ត គ្រឿងបន្លាស់ គ្រឿង,"Import car parts, spare parts",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601023,នាំចូលទោចក្រយានយន្ត រួមទាំងកង់មានម៉ាស៊ីន ,"Import of motorcycles, including mopeds",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601024,នាំចូលគ្រឿងបន្លាស់និងគ្រឿងបន្ទាប់បន្សំទោចក្រ,Import of motorcycle parts and accessories,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601025,នាំចូលប្រេងសាំង ប្រេងម៉ាស៊ូត ប្រេងរំអិល ,Import of fuel for motor vehicles and motorcycles,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601026,នាំចូលឧស្ម័នឥន្ធនៈរាវ ,Import Liquelfied Petroleum ,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601027,នាំចូលផលិតផលឥន្ធនៈរឹង រាវ និងឧស្ម័ន និងផ,"Import of solid, liquid and gas products and",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601028,នាំចូលនូវកុំព្យូទ័រ និងឧបករណ៍បន្ទាប់បន្សំ ,Import of computers and peripheral equipment,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601029,នាំចូលឧបករណ៍លេងហ្គេម ,Import of video game consoles,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601030,នាំចូលកម្មវិធីសម្រាប់ប្រើទូទៅ រួមមានវីដេអូហ្គេម ,"Import of non-customized software, including video games",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601031,នាំចូលទូរស័ព្ទដៃ និងឧបករណ៍ទូរគមនាគមន៍,Import of mobile phones and telecommunication equipment,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601032,នាំចូលគ្រឿងវិទ្យុ និងទូរទស្សន៍ ,Import of radio and television equipment,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601033,នាំចូលម៉ាស៊ីនចាក់ និងម៉ាស៊ីនថតស៊ីឌី និងឌីវីឌី ,Import CD and DVD players and camcorders,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601034,នាំចូលផលិតផលវាយនភណ្ឌ ក្រណាត់ និង,"Import textiles, fabrics and",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601035,នាំចូលកម្រាលព្រំ និងក្រណាត់ជូតជើង ,Import of carpets and rugs,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601036,នាំចូលវាំងនន និងវាំងននសំណាញ់ ,Import of curtains and net curtains,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601037,នាំចូលក្រដាសបិតជញ្ជាំង ឥដ្ឋស៊ីរ៉ាមិច និង,Import ceramic wall paper and,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601038,នាំចូលគ្រឿងសង្ហារឹមនៅក្នុងផ្ទះ ,Import of household furniture,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601039,នាំចូលគ្រឿងបំភ្លឺ ,Import of articles for lighting,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601040,នាំចូលសម្ភារៈប្រើក្នុងផ្ទះបាយ កាំបិត ចង្រ្កាន កែវ ,"Import kitchen utensils, knives, glass cookers",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601041,នាំចូលឧបករណ៍ប្រើក្នុងផ្ទះ ,Import of household appliances,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601042,នាំចូលឧបករណ៍តន្រ្តីសៀវភៅភ្លេង ,Import of musical instruments and scores,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601043,នាំចូលប្រព័ន្ធសុវត្តិភាព ,Import of security systems,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601044,នាំចូលឧបករណ៍និងសម្ភារៈប្រើក្នុងគ្រួរសារដែល,Import household appliances and equipment,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601045,នាំចូលឧបករណ៍ និងបរិក្ខារប្រើប្រាស់ក្នុងការិយា,Import office equipment and supplies,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601046,នាំចូលសៀវភៅ កាសែត សម្ភារៈការិយាល័យ ,"Import of books, newspapers and stationary",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601047,នាំចូលតន្រ្តី និងវីដេអូ ដែលថតដាក់ឌីស វីស៊ីឌី ,Import music and videos recorded on VCD,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601048,នាំចូលទំនិញ និងឧបករណ៍កីឡា រួមមានប្រដាប់,"Import of goods and sports equipment, including equipment",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601049,នាំចូលទំនិញសម្រាប់បោះជំរុំ ,Import of camping goods,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601050,នាំចូលទូក និងឧបករណ៍ពាក់ព័ន្ធ ,Import of boats and equipments,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601051,នាំចូលកង់ និងគ្រឿងបន្លាស់ និងគ្រឿងបន្ទាប់បន្សំ ,Import of bicycles and related parts and accessories,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601052,នាំចូលហ្គេម និងប្រដាប់ក្មេងលេង ធ្វើពីគ្រប់សារ,Import games and toys made from all kinds of messages,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601053,នាំចូលសម្លៀកបំពាក់ និងគ្រឿងបន្ទាប់បន្សំ ,Import of articles of clothing and accessories,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601054,នាំចូលផលិតផលពាក់នឹងជើង ,Import of footwear,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601055,ហាងមានឯកទេសលក់ដុំនិងរាយឱសថ ,Stores specialized in Import of pharmaceuticals,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601056,ហាងមានឯកទេសលក់ដុំនិងរាយទឹកអប់ និងគ្រឿងសម្អាង ,Stores specialized in Import of perfumery and cosmetic articles,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601057,នាំចូលឧបករណ៍ថតរូប និងផលិតផលទាក់ទង ,Import of photographic and precision equipment,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601058,នាំចូលនាឡិកាដៃ នាឡិកាព្យួរជញ្ជាំង និងគ្រឿង,"Import watches, wall clocks and accessories",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601059,នាំចូលផ្កា រុក្ខជាតិ គ្រាប់ពូជ ,"Import of flowers, plants, seeds, fertilizers",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601060,នាំចូលវត្ថុអនុស្សាវរីយ៍ ផលិតផលសិប្បកម្ម ,"Import souvenirs, handicrafts",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601061,នាំចូលប្រេងសំរាប់ប្រើក្នុងផ្ទះ ហ្គាសកំប៉ុង ធ្យូង ,"Import of home oil, gas, canned coal",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601062,នាំចូលវែនតា និងផលិតផលអុបទិចផ្សេងៗទៀត ,Import of spectacles and other optical goods,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601063,នាំចូលត្រី សត្វចិញ្ចឹម និងចំណីសត្វសម្រាប់សត្វ,"Import fish, livestock and animal feed for animals",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601064,នាំចូលសៀវភៅជជុះ ,Import of second-hand books,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601065,នាំចូលផលិតផលអគ្គីសនី និងអេឡិចត្រូនិចជជុះ ,Import of second-hand electrical and electronic goods,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601066,នាំចូលវត្ថុបុរាណ ,Import of antiques,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601067,នាំចូលផលិតផលជជុះផ្សេងៗ ,Import of second-hand goods n.e.c,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601068,នាំចូលគ្រឿងម៉ាស៊ីនឧបករណ៍ និងបរិក្ខាផ្គត់ផ្គង់,"Import machinery, equipment and supplies",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601069,នាំចូលជ័រកៅស៊ូ ,Import of rubber,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601070,នាំចូលប្រេងដូង ,Import of coconut oil,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601071,នាំចូលដំឡូងមី ,Import of cassava,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601072,នាំចូលពោតឧស្សាហកម្ម ,Import of industrial corn,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601073,នាំចូលគ្រាប់ស្វាយចន្ទី ,Import of cashew nuts,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601074,នាំចូលវត្ថុធាតុដើមកសិកម្មផ្សេងទៀត ,Import of other agricultural raw materials n.e.c,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601075,នាំចូលផលិតផល និងរ៉ែលោហធាតុ ពាក់,Import of worn metal products and minerals,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601076,នាំចូលឈើហុប ឈើអារ ក្តារបន្ទះ បន្ទះក្តាស្តើង,"Import of wood, sawn wood, plywood, thin board",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601077,នាំចូលថ្នាំលាប និងថ្នាំលាបឈើឲ្យរលោង ,Import of paints and varnish,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601078,នាំចូលឧបករណ៍ និងសម្ភារៈសំណង់ ,Import of construction materials & tools,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601079,នាំចូលគ្រឿងសម្រាប់បន្ថែមភ្ជាប់លើអគារ ឬ,Import building accessories or,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601080,នាំចូលម៉ាស៊ីនទឹកក្តៅ និងឧបករណ៍អនាម័យ និងម៉ាស៊ីនកម្តៅទឹក ,Import of sanitary installation and equipment and hotwater heaters,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601081,នាំចូលសារធាតុគីមីសម្រាប់ឧស្សាហកម្ម ,Import of industrial chemicals,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601082,នាំចូលជី និងផលិតផលគីមីកសិកម្ម ,Import of fertilizers and agrochemical products,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601083,នាំចូលសម្ភារៈធ្វើពីប្លាស្ទិកមិនទាន់ច្នៃ ,Import of plastic materials in primary forms,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601084,នាំចូលសរសៃអំបោះវាយនភ័ណ្ឌ។ល។ ,"Import of textile fibres, etc",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601085,នាំចូលក្រដាសក្នុងចំនួនច្រើន និងសម្ភារៈវេចខ្ចប់ ,"Import of paper in bulk, packaging materials",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601086,លក់ដុំកាកសំណល់​និង កម្ទេចកម្ទី ,Import of waste and scrap,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601087,នាំចូលកម្ទេចរថយន្ត កុំព្យូទ័រ ទូរទស្សន៍ និងឧបករណ៍ផ្សេងៗទៀតដើម្បីយក និងលក់បន្តនូវផ្នែកណាមួយដែលប្រើប្រាស់បាន ,"Import Dismantling of automobiles, computer, televisions and other equipment to obtain and re-sell usable parts",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601088,នាំចូលកម្ទេចកម្ទី កាកសំណល់ និងផលិតផល,"Import debris, waste and products",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601089,នាំចូលម៉ាស៊ីនផ្សេងៗសម្រាប់ប្រើប្រាស់ក្នុងឧស្សាហកម្ម ពាណិជ្ជកម្ម និងប្រព័ន្ធបង្ហាញផ្លូវ ព្រមទាំងសេវាកម្មផ្សងៗ ,"Import of other machinery n.e.c. for use in industry, trade and navigation and other services",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601090,នាំចូលថ្នាំកម្ចាត់សត្វល្អិត ,Import of pesticides,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601091,នាំចូលពោត ,Import of maize,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601092,នាំចូលសណ្តែកប្រេង ,Import of oil seeds,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601093,នាំចូលបន្លែយកដើម និងស្លឹក ,Import of leafy or stem vegetables,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601094,នាំចូលបន្លែយកផ្លែ ,Import of fruits bearing vegetables,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601095,នាំចូលកសិផលអម្បូរត្រសក់ផ្អែម ,Import of melons,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601096,នាំចូលផ្សិត ,Import of mushrooms,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601097,នាំចូលបន្លែគ្រាប់ ,Import of vegetables seeds,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601098,នាំចូលបន្លែផ្សេងទៀត ,Import of other vegetables,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601099,នាំចូលកសិផលប្រភេទឬស ឬមើម  ដែលពុំបានរាប់បញ្ចូល ,"Import of other roots, tubers, bulb or tuberous vegetables n.e.c",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601100,​នាំចូលអំពៅ ,Import of sugar cane,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601101,​នាំចូលកប្បាស និងដំណាំសរសៃដទៃទៀត ,Import of cotton and other fibre crops,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601102,​នាំចូលសាគូ ,"Import of sago,rumbia",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601103,​នាំចូលទំពាំងបាយជូរ ,Import of grapes,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601104,​នាំចូលចេក ,Import of banana,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601105,​នាំចូលស្វាយ ,Import of mango,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601106,​នាំចូលធុរេន ,Import of durian,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601107,​​នាំចូលសាវម៉ាវ ,Import of rambutan,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601108,​​នាំចូលមៀន ,Import of longan,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601109,​​នាំចូលល្ហុង ,Import of papaya,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601110,​​នាំចូលម្នាស់ ,Import of pineapple,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601111,​​នាំចូលស្រកានាគ ,Import of pitaya or dragon fruit,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601112,​​នាំចូលផ្លែឈើតំបន់ត្រូពិច និង អនុតំបន់ត្រូពិចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Import of other tropical and subtropical fruits n.e.c.,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601113,​​នាំចូលក្រូចថ្លុង ,Import of pomelo,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601114,​​នាំចូលក្រូចឆ្មារ ,Import of lemons and limes,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601115,​​នាំចូលក្រូចឃ្វិច និងក្រូចពោធិ៍សាត់ ,"Import of oranges, tangerines and mandarins",020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601116,​​នាំចូលក្រូចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Import of other citrus fruits n.e.c.,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601117,​​នាំចូលត្របែក ,Import of guava,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601118,​​នាំចូលផ្លែឈើ និងមានគ្រាប់ដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Import of other pome fruits and stones fruits n.e.c.,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601119,​​នាំចូលប៊ើរី ,Import of berries,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601120,​​នាំចូលកសិផលហូបគ្រាប់ ,Import of fruit seeds,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601121,​​​​នាំចូលដូងប្រេង ,Import of oil palm,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601122,​​​​នាំចូលដូង ,Import of coconut,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601123,​នាំចូលកាកាវ ,Import of cocoa,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601124,នាំចូលម្រេច ,Import of black pepper or piper nigrum,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601125,​នាំចូលម្ទេស ,Import of chillies and peppers or capsicum spp.,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601126,​នាំចូលខ្ញី ,Import of ginger,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601127,​នាំចូលផ្លែឈើចម្រុះ ,Import of mixed fruits,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601128,​នាំចូលបន្លែចម្រុះ ,Import of mixed vegetables,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601129,​នាំចូលគ្រាប់ពូជចម្រុះ ,Import of mixed seeds,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601130,​នាំចូលឈើចាក់ធ្មេញ ,Import of toothpick,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020601131,​នាំចូលផ្សេងៗទៀត ដែលពុំបានរាប់បញ្ចូល ,Other import n.e.c,020601,នាំចូល ,Import,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602001,នាំចេញស្រូវ ,Export of paddy,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602002,នាំចេញអង្ករ ,Export of rice,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602003,នាំចេញស្រូវ និងអង្ករ ,Export of paddy and rice,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602004,នាំចេញម្សៅ គ្រាប់ធញ្ញជាតិ និងស្ករ ,"Export of flour, other grains and sugars",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602005,នាំចេញអង្ករ ម្សៅ គ្រាប់ធញ្ញជាតិ និងស្ករ ,"Export of rice, flour, other grains and sugars",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602006,នាំចេញបន្លែ និងផ្លែឈើស្រស់ ឬរក្សាទុកក្រៀម ,Export of fresh or preserved vegetables and fruits,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602007,នាំចេញសាច់ និងផលិតផលសាច់ រួមទាំងបក្សី ,Export of meat and meat products including poultry,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602008,នាំចេញត្រី គ្រឿងសមុទ្រ និងផលិតផលដូចនេះ ,"Export of fish, other seafood and products thereof",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602009,នាំចេញ ផលិតផលនំបុ័ង ,Export of bakery products,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602010,នាំចេញផលិតផលស្ករគ្រាប់ និងនំ ,Export of sugar confectionery,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602011,នាំចេញមី ស្បែក និងផលិតផលអាហារផ្សេងទៀត,Export skin noodles and other food products,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602012,នាំចេញផលិតផលដែលធ្វើពីទឹកដោះគោ ,Export of dairy products,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602013,នាំចេញនូវផលិតផលអាហារផ្សេងៗ ,Export of other food products n.e.c.,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602014,នាំចេញស្រាបៀរ ស្រា និងគ្រឿងស្រវឹងផ្សេងទៀត ,"Export of beer, wine and spirits",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602015,នាំចេញតែ កាហ្វេ និងភេសជ្ជៈផ្សេងទៀត ,"Export of tea, coffee and other beverages",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602016,នាំចេញភេសជ្ជៈ ទឹកច្រកដប និងទឹកកក ,"Export of soft drinks, bottled water, and ice",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602017,នាំចេញផលិតផលថ្នាំជក់និងថ្នាំជក់ ,Export of tobacco products & tobacco,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602018,នាំចេញរថយន្តថ្មី  ,Export of new motor vehicles,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602019,នាំចេញរថយន្តដែលប្រើប្រាស់រួច ,Export of used motor vehicles,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602020,នាំចេញរថយន្តថ្មីសម្រាប់ឧស្សាហកម្ម ពាណិជ្ជកម្ម ,Exports new cars for commercial industry,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602021,នាំចេញរថយន្តប្រើរួចសម្រាប់ឧស្សាហកម្ម,Export of used cars for industry,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602022,នាំចេញគ្រឿងបន្លាស់រថយន្ត គ្រឿងបន្លាស់ គ្រឿង,Export Auto Parts Auto Parts,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602023,នាំចេញទោចក្រយានយន្ត រួមទាំងកង់មានម៉ាស៊ីន ,"Export of motorcycles, including mopeds",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602024,នាំចេញគ្រឿងបន្លាស់និងគ្រឿងបន្ទាប់បន្សំទោចក្រ,Export of motorcycle parts and accessories,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602025,នាំចេញប្រេងសាំង ប្រេងម៉ាស៊ូត ប្រេងរំអិល ,Export of fuel for motor vehicles and motorcycles,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602026,នាំចេញឧស្ម័នឥន្ធនៈរាវ ,Export Liquelfied Petroleum ,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602027,នាំចេញផលិតផលឥន្ធនៈរឹង រាវ និងឧស្ម័ន និងផ,"Export of solid, liquid and gas products and",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602028,នាំចេញនូវកុំព្យូទ័រ និងឧបករណ៍បន្ទាប់បន្សំ ,Export of computers and peripheral equipment,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602029,នាំចេញឧបករណ៍លេងហ្គេម ,Export of video game consoles,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602030,នាំចេញកម្មវិធីសម្រាប់ប្រើទូទៅ រួមមានវីដេអូហ្គេម ,"Export of non-customized software, including video games",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602031,នាំចេញទូរស័ព្ទដៃ និងឧបករណ៍ទូរគមនាគមន៍,Export of mobile phones and telecommunication equipment,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602032,នាំចេញគ្រឿងវិទ្យុ និងទូរទស្សន៍ ,Export of radio and television equipment,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602033,នាំចេញម៉ាស៊ីនចាក់ និងម៉ាស៊ីនថតស៊ីឌី និងឌីវីឌី ,Export CD & DVD Players & Recorders,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602034,នាំចេញផលិតផលវាយនភណ្ឌ ក្រណាត់ និង,"Exports of textiles, fabrics and",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602035,នាំចេញកម្រាលព្រំ និងក្រណាត់ជូតជើង ,Export of carpets and rugs,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602036,នាំចេញវាំងនន និងវាំងននសំណាញ់ ,Export of curtains and net curtains,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602037,នាំចេញក្រដាសបិតជញ្ជាំង ឥដ្ឋស៊ីរ៉ាមិច និង,Export ceramic wall paper and,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602038,នាំចេញគ្រឿងសង្ហារឹមនៅក្នុងផ្ទះ ,Export of household furniture,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602039,នាំចេញគ្រឿងបំភ្លឺ ,Export of articles for lighting,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602040,នាំចេញសម្ភារៈប្រើក្នុងផ្ទះបាយ កាំបិត ចង្រ្កាន កែវ ,"Export kitchen utensils, knives, glass cookers",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602041,នាំចេញឧបករណ៍ប្រើក្នុងផ្ទះ ,Export of household appliances,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602042,នាំចេញឧបករណ៍តន្រ្តីសៀវភៅភ្លេង ,Export of musical instruments and scores,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602043,នាំចេញប្រព័ន្ធសុវត្តិភាព ,Export of security systems,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602044,នាំចេញឧបករណ៍និងសម្ភារៈប្រើក្នុងគ្រួរសារដែល,Export of household appliances and equipment,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602045,នាំចេញឧបករណ៍ និងបរិក្ខារប្រើប្រាស់ក្នុងការិយា,Export Office Equipment & Supplies,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602046,នាំចេញសៀវភៅ កាសែត សម្ភារៈការិយាល័យ ,"Export of books, newspapers and stationary",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602047,នាំចេញតន្រ្តី និងវីដេអូ ដែលថតដាក់ឌីស វីស៊ីឌី ,Export music and video recordings to VCDs,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602048,នាំចេញទំនិញ និងឧបករណ៍កីឡា រួមមានប្រដាប់,"Export of goods and sports equipment, including equipment",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602049,នាំចេញទំនិញសម្រាប់បោះជំរុំ ,Export of camping goods,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602050,នាំចេញទូក និងឧបករណ៍ពាក់ព័ន្ធ ,Export of boats and equipments,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602051,នាំចេញកង់ និងគ្រឿងបន្លាស់ និងគ្រឿងបន្ទាប់បន្សំ ,Export of bicycles and related parts and accessories,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602052,នាំចេញហ្គេម និងប្រដាប់ក្មេងលេង ធ្វើពីគ្រប់សារ,Export games and toys made from all kinds of messages,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602053,នាំចេញសម្លៀកបំពាក់ និងគ្រឿងបន្ទាប់បន្សំ ,Export of articles of clothing and accessories,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602054,នាំចេញផលិតផលពាក់នឹងជើង ,Export of footwear,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602055,ហាងមានឯកទេសលក់ដុំនិងរាយឱសថ ,Stores specialized in Export of pharmaceuticals,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602056,ហាងមានឯកទេសលក់ដុំនិងរាយទឹកអប់ និងគ្រឿងសម្អាង ,Stores specialized in Export of perfumery and cosmetic articles,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602057,នាំចេញឧបករណ៍ថតរូប និងផលិតផលទាក់ទង ,Export of photographic and precision equipment,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602058,នាំចេញនាឡិកាដៃ នាឡិកាព្យួរជញ្ជាំង និងគ្រឿង,"Export watches, wall clocks and accessories",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602059,នាំចេញផ្កា រុក្ខជាតិ គ្រាប់ពូជ ,"Export of flowers, plants, seeds, fertilizers",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602060,នាំចេញវត្ថុអនុស្សាវរីយ៍ ផលិតផលសិប្បកម្ម ,"Export souvenirs, handicrafts",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602061,នាំចេញប្រេងសំរាប់ប្រើក្នុងផ្ទះ ហ្គាសកំប៉ុង ធ្យូង ,"Exports of domestic oil, gas, canned coal",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602062,នាំចេញវែនតា និងផលិតផលអុបទិចផ្សេងៗទៀត ,Export of spectacles and other optical goods,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602063,នាំចេញត្រី សត្វចិញ្ចឹម និងចំណីសត្វសម្រាប់សត្វ,"Export of fish, livestock and animal feed",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602064,នាំចេញសៀវភៅជជុះ ,Export of second-hand books,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602065,នាំចេញផលិតផលអគ្គីសនី និងអេឡិចត្រូនិចជជុះ ,Export of second-hand electrical and electronic goods,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602066,នាំចេញវត្ថុបុរាណ ,Export of antiques,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602067,នាំចេញផលិតផលជជុះផ្សេងៗ ,Export of second-hand goods n.e.c,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602068,នាំចេញគ្រឿងម៉ាស៊ីនឧបករណ៍ និងបរិក្ខាផ្គត់ផ្គង់,"Export Machinery, Equipment & Supplies",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602069,នាំចេញជ័រកៅស៊ូ ,Export of rubber,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602070,នាំចេញប្រេងដូង ,Export of coconut oil,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602071,នាំចេញដំឡូងមី ,Export of cassava,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602072,នាំចេញពោតឧស្សាហកម្ម ,Export of industrial corn,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602073,នាំចេញគ្រាប់ស្វាយចន្ទី ,Export of cashew nuts,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602074,នាំចេញវត្ថុធាតុដើមកសិកម្មផ្សេងទៀត ,Export of other agricultural raw materials n.e.c,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602075,នាំចេញផលិតផល និងរ៉ែលោហធាតុ ពាក់,Export of worn metal products and minerals,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602076,នាំចេញឈើហុប ឈើអារ ក្តារបន្ទះ បន្ទះក្តាស្តើង,"Export of sawn wood, plywood, plywood, thin board",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602077,នាំចេញថ្នាំលាប និងថ្នាំលាបឈើឲ្យរលោង ,Export of paints and varnish,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602078,នាំចេញឧបករណ៍ និងសម្ភារៈសំណង់ ,Export of construction materials & tools,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602079,នាំចេញគ្រឿងសម្រាប់បន្ថែមភ្ជាប់លើអគារ ឬ,Export building accessories or,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602080,នាំចេញម៉ាស៊ីនទឹកក្តៅ និងឧបករណ៍អនាម័យ និង,Export of water heaters and sanitary ware and,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602081,នាំចេញសារធាតុគីមីសម្រាប់ឧស្សាហកម្ម ,Export of industrial chemicals,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602082,នាំចេញជី និងផលិតផលគីមីកសិកម្ម ,Export of fertilizers and agrochemical products,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602083,នាំចេញសម្ភារៈធ្វើពីប្លាស្ទិកមិនទាន់ច្នៃ ,Export of plastic materials in primary forms,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602084,នាំចេញសរសៃអំបោះវាយនភ័ណ្ឌ។ល។ ,"Export of textile fibres, etc",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602085,នាំចេញក្រដាសក្នុងចំនួនច្រើន និងសម្ភារៈវេចខ្ចប់ ,"Export of paper in bulk, packaging materials",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602086,នាំចេញកាកសំណល់​និង កម្ទេចកម្ទី ,Export of waste and scrap,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602087,នាំចេញកម្ទេចរថយន្ត កុំព្យូទ័រ ទូរទស្សន៍ និងឧបករណ៍ ផ្សេងៗទៀតដើម្បីយក និងលក់បន្តនូវផ្នែកណាមួយដែល ប្រើប្រាស់បាន ,"Export Dismantling of automobiles, computer, televisions and other equipment to obtain and re-sell usable parts",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602088,នាំចេញកម្ទេចកម្ទី កាកសំណល់ និងផលិតផល,"Export of debris, waste and products",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602089,នាំចេញម៉ាស៊ីនផ្សេងៗសម្រាប់ប្រើប្រាស់ក្នុងឧស្សា,Export of various machines for industrial use,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602090,នាំចេញថ្នាំកម្ចាត់សត្វល្អិត ,Export of pesticides,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602091,នាំចេញពោត ,Export of maize,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602092,នាំចេញសណ្តែកប្រេង ,Export of oil seeds,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602093,នាំចេញបន្លែយកដើម និងស្លឹក ,Export of leafy or stem vegetables,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602094,នាំចេញបន្លែយកផ្លែ ,Export of fruits bearing vegetables,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602095,នាំចេញកសិផលអម្បូរត្រសក់ផ្អែម ,Export of melons,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602096,នាំចេញផ្សិត ,Export of mushrooms,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602097,នាំចេញបន្លែគ្រាប់ ,Export of vegetables seeds,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602098,នាំចេញបន្លែផ្សេងទៀត ,Export of other vegetables,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602099,នាំចេញកសិផលប្រភេទឬស ឬមើម  ដែលពុំបានរាប់បញ្ចូល ,"Export of other roots, tubers, bulb or tuberous vegetables n.e.c",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602100,​នាំចេញអំពៅ ,Export of sugar cane,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602101,​នាំចេញកប្បាស និងដំណាំសរសៃដទៃទៀត ,Export of cotton and other fibre crops,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602102,​នាំចេញសាគូ ,"Export of sago, rumbia",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602103,​នាំចេញទំពាំងបាយជូរ ,Export of grapes,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602104,​នាំចេញចេក ,Export of banana,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602105,​នាំចេញស្វាយ ,Export of mango,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602106,​នាំចេញធុរេន ,Export of durian,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602107,​​នាំចេញសាវម៉ាវ ,Export of rambutan,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602108,​​នាំចេញមៀន ,Export of longan,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602109,​​នាំចេញល្ហុង ,Export of papaya,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602110,​​នាំចេញម្នាស់ ,Export of pineapple,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602111,​​នាំចេញស្រកានាគ ,"Export of pitaya, dragon fruit",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602112,​​នាំចេញផ្លែឈើតំបន់ត្រូពិច និង អនុតំបន់ត្រូពិចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Export of other tropical and subtropical fruits n.e.c.,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602113,​​នាំចេញក្រូចថ្លុង ,Export of pomelo,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602114,​​នាំចេញក្រូចឆ្មារ ,Export of lemons and limes,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602115,​​នាំចេញក្រូចឃ្វិច និងក្រូចពោធិ៍សាត់ ,"Export of oranges, tangerines and mandarins",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602116,​​នាំចេញក្រូចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Export of other citrus fruits n.e.c.,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602117,​​នាំចេញត្របែក ,Export of guava,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602118,​​នាំចេញកសិផលហូបផ្លែ និងមានគ្រាប់ដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Export of other pome fruits and stones fruits n.e.c.,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602119,​​នាំចេញប៊ើរី ,Export of berries,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602120,​​នាំចេញកសិផលហូបគ្រាប់ ,Export of fruit seeds,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602121,​​​​នាំចេញដូងប្រេង ,Export of oil palm,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602122,​​​​នាំចេញដូង ,Export of coconut,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602123,​នាំចេញកាកាវ ,Export of cocoa,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602124,នាំចេញម្រេច ,"Export of black pepper, piper nigrum",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602125,​នាំចេញម្ទេស ,"Export of chillies and peppers, capsicum spp.",020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602126,​នាំចេញខ្ញី ,Export of ginger,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602127,​នាំចេញផ្លែឈើចម្រុះ ,Export of mixed fruits,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602128,​នាំចេញបន្លែចម្រុះ ,Export of mixed vegetables,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602129,​នាំចេញគ្រាប់ពូជចម្រុះ ,Export of mixed seeds,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602130,​នាំចេញឈើចាក់ធ្មេញ ,Export of toothpick,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020602131,​នាំចេញផ្សេងៗទៀត ដែលពុំបានរាប់បញ្ចូល ,Other export n.e.c,020602,នាំចេញ ,Export,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603001,លក់ដុំយានយន្តថ្មីៗ ,Sale of new motor vehicles,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603002,លក់ដុំនូវយានយន្តដែលប្រើប្រាស់រួច ,Sale of used motor vehicles,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603003,លក់នូវយានយន្តថ្មីសម្រាប់ឧស្សាហកម្ម ពាណិជ្ចកម្ម ,Selling new vehicles for the commercial industry,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603004,លក់នូវយានយន្តប្រើរួចសម្រាប់ឧស្សាហកម្ម ពាណិជ្ចកម្ម ,Sell ​​used vehicles for commercial industry,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603005,ការលក់ដុំរាល់គ្រឿងបន្លាស់យានយន្ត គ្រឿង,Wholesale and retail of all auto parts,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603006,លក់ដុំនុវទោចក្រយាន្តយន្ត រួមទាំងកង់មាន,"Wholesale and retail of motorcycles, including bicycles",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603007,លក់ដុំរួមទាំងការកម៉្មង់តាមសារនូវគ្រឿង,"Wholesale and retail, including text message ordering",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603008,ហាងលក់គ្រឿងទេស ,"Groceries, provision stores",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603009,ផ្សារទំនើប ,Supermarket,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603010,ផ្សារទំនើបខ្នាតតូច ,Mini marts,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603011,ផ្សារលក់ទំនិញធំៗដែលមាន ឬមិនមានផ្សារទំនើប ,Department stores with or without supermarket,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603012,ទិញលក់ទំនិញផ្សេងទៀតនៅក្នុងហាងមិនឯកទេស ,Sales in non-specialized stores n.e.c.,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603013,ទិញលក់ស្រូវ ,Sale of paddy,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603014,ទិញលក់អង្ករ ,Sale of rice,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603015,ទិញលក់ស្រូវ និងអង្ករ ,Sale of paddy and rice,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603016,ទិញលក់ម្សៅ គ្រាប់ធញ្ញជាតិ និងស្ករ ,"Sale of flour, other grains and sugars",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603017,ទិញលក់អង្ករ ម្សៅ គ្រាប់ធញ្ញជាតិ និងស្ករ ,"Sale of rice, flour, other grains and sugars",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603018,ទិញលក់បន្លែ និងផ្លែឈើស្រស់ ឬរក្សាទុកក្រៀម ,Sale of fresh or preserved vegetables and fruits,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603019,ទិញលក់សាច់ និងផលិតផលសាច់ រួមទាំងបក្សី ,"Sale of meat and meat products, including poultry",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603020,ទិញលក់ត្រី គ្រឿងសមុទ្រ និងផលិតផលដូចនេះ ,"Sale of fish, other seafood and products thereof",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603021,ទិញលក់ ផលិតផលនុំបុ័ង ,Sale of bakery products,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603022,ទិញលក់ផលិតផលស្ករគ្រាប់ និងនំ ,Sale of sugar confectionery,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603023,ទិញលក់មី ស្បែក និងផលិតផលអាហារផ្សេងទៀតធ្វើពី,Buy and sell skin noodles and other food products made from,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603024,ទិញលក់ផលិតផលដែលថ្វើពីទឺកដោះគោ ,Sale of dairy products,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603025,ទិញលក់នៅផលិតផលអាហារផ្សេងៗ ,Sale of other food products n.e.c.,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603026,ទិញលក់ស្រាបៀរ ស្រា និងគ្រឿងស្រវឹងផ្សេងទៀត ,"Sale of beer, wine and spirits",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603027,ទិញលក់តែ កាហ្វេ និងភេសជ្ជៈផ្សេងទៀត ,"Sale of tea, coffee and other beverages",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603028,ទិញលក់ភេសជ្ជៈ ទឹកច្រកដប និងទឹកកក ,"Sale of soft drinks, bottled water, and ice",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603029,ទិញលក់ផលិតផលថ្នាំជក់និងថ្នាំជក់ ,Sale of tobacco products & tobacco,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603030,ទិញលក់ប្រេងសាំង ប្រេងម៉ាស៊ូត ប្រេងរមអិល ,Sale of fuel for motor vehicles and motorcycles,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603031,ទិញលក់ឧស្ម័នឥន្ធនៈរាវ​ ,"Liquefied Petroleum Gas, Sale of liquefied petroleum gas",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603032,ទិញលក់ផលិតផលឥន្ធនៈរឹង រាវ និងឧស្ម័ន និងផលិត,"Buy and sell solid, liquid and gas products and manufacture",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603033,ទិញលក់កុំព្យូទ័រ និងឧបករណ៍បន្ទាប់បន្សំ ,Sale of computers and peripheral equipment,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603034,ទិញលក់ឧបករណ៍លេងហ្គេម ,Sale of video game consoles,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603035,ទិញលក់កម្មវិធីសម្រាប់ប្រើទូទៅ រួមមានវីដេអូហ្គេម ,"Sale of non-customized software, including video games",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603036,ទិញលក់ទូរស័ព្ទដៃ និងឧបករណ៍ទូរគមនាគមន៍ផ្សេងៗ ,Sale of mobile phones & other telecommunication equipment,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603037,ទិញលក់គ្រឿងវិទ្យុ និងទូរទស្សន៍ ,Sale of radio and television equipment,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603038,ទិញលក់ម៉ាស៊ីនចាក់ និងម៉ាស៊ីនថតស៊ីឌី និងឌីវីឌី និង,Buy and sell CD and DVD players and recorders;,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603039,ទិញលក់ផលិតផលវាយនភណ្ឌ ក្រណាត់ និងអំបោះ,"Buy and sell textiles, fabrics and yarns",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603040,ទិញលក់កម្រាលព្រំ និងក្រណាត់ជូតជើង ,Sale of carpets and rugs,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603041,ទិញលក់វាំងនន និងវាំងននសំណាញ់ ,Sale of curtains and net curtains,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603042,ទិញលក់ក្រដាសបិទជញ្ជាំង ឥដ្ឋស៊ីរ៉ាមិច និងកម្រាល,"Buy and sell wallpaper, ceramic tiles and flooring",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603043,ទិញលក់គ្រឿងសង្ហារឹមនៅក្នុងផ្ទះ ,Sale of household furniture,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603044,ទិញលក់គ្រឿងបំភ្លឺ ,Sale of articles for lighting,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603045,ទិញលក់សម្ភារៈប្រើក្នុងផ្ទះបាយ កាំបិត ចង្រ្កាន កេវ ចាន ,"Buy and sell kitchen utensils, knives, stoves, glasses, dishes",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603046,ទិញលក់ឧបករណ៍ប្រើក្នុងផ្ទះ ,Sale of household appliances,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603047,ទិញលក់ឧបករណ៍តន្រ្តីសៀវភៅភ្លេង ,Sale of musical instruments and scores,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603048,ទិញលក់ប្រព័ន្ធសុវត្ថិភាព ,Sale of security systems,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603049,ទិញលក់ឧបករណ៍និងសម្ភារៈប្រើក្នុងគ្រួសារដែលមិនបាន,Buy and sell household appliances and equipment that are not,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603050,ទិញលក់ឧបករណ៍ និងបរិក្ខារប្រើក្នុងការិយាល័យ ,Sale of office supplies and equipment,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603051,ទិញលក់សៀវភៅ កាសែត ​សម្ភារៈការិយាល័យ ,"Sale of books, newspapers and stationary",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603052,ទិញលក់តន្រ្តី និងវីដេអូ ដែលថតដាក់ឌីស​ វីស៊ីឌី និង ឌីវីឌី ,"Sale of music and video recordings on compact discs, VCDs and DVDs",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603053,ទិញលក់ទំនិញ និងឧបករណ៍កីឡា​ រួមមានប្រដាប់ស្ទូចត្រី ,"Sale of sports goods and equipment, including fishing gear",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603054,ទិញលក់ទំនិញសម្រាប់បោះជំរំ ,Sale of camping goods,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603055,ទិញលក់ទូក និងឧបករណ៍ពាក់ព័ន្ធ ,Sale of boats and equipments,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603056,ទិញលក់កង់ និងគ្រឿងបន្លាស់ និងគ្រឿងបន្ទាប់បន្សំ ,Sale of bicycles and related parts and accessories,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603057,ទិញលក់ហ្គេម និងប្រដាប់ក្មេងលេង ធ្វើពីគ្រប់សារធាតុ ,"Sale of games and toys, made of all materials",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603058,ទិញលក់សម្លៀកបំពាក់ និងគ្រឿងបន្ទាប់បន្សំ ,Sale of articles of clothing and accessories,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603059,ទិញលក់ផលិតផលពាក់នឹងជើង ,Sale of footwear,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603060,ហាងមានឯកទេសលក់ដុំនិងរាយឳសថ ,Stores specialized in sale of pharmaceuticals,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603061,ហាងមានឯកទេសលក់ដុំនិងរាយទឹកអប់ និងគ្រឿង,The shop specializes in wholesale and retail of perfumes and accessories.,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603062,ទិញលក់ឧបករណ៍ថតរូប និងផលិតផលទាក់ទង ,Sale of photographic and precision equipment,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603063,ទិញលក់នាឡិកាដៃ នាឡិកាព្យួរជញ្ជាំង និងគ្រឿងអលង្ការ ,"Sale of watches, clocks and jewellery",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603064,ទិញលក់ផ្កា រុក្ខជាតិ គ្រាប់ពូជ ,"Sale of flowers, plants, seeds, fertilizers",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603065,ទិញលក់វត្ថុអនុស្សាវរីយ៍ ផលិតផលសិប្បកម្ម សម្ភារៈ ,"Buy and sell souvenirs, handicrafts, materials",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603066,ទិញលក់ប្រេងសំរាប់ប្រើក្នុងផ្ទះ ហ្គាសកំប៉ុង ធ្យូង​ អុស ,"Sale of household fuel oil, bottled gas, charcoal and fuel wood",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603067,ទិញលក់វ៉ែនតា និងផលិតផលអុបទិកផ្សេងៗទៀត ,Sale of spectacles and other optical goods,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603068,ទិញលក់ត្រី សត្វចិញ្ចឹម និងចំណីសម្រាប់សត្វចិញ្ចឹម ,"Sale of aquarium fishes, pet animals and pet food",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603069,ទិញលក់សៀវភៅជជុះ ,Sale of second-hand books,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603070,ទិញលក់ផលិតផលអគ្គីសនី និងអេឡិចត្រូនិចជជុះ ,Sale of second-hand electrical and electronic goods,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603071,ទិញលក់វត្ថុបុរាណ ,Sale of antiques,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603072,ទិញលក់ផលិតផលជជុះផ្សេងៗ ,Sale of second-hand goods n.e.c,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603073,ទិញលក់គ្រឿងម៉ាស៊ីនឧបករណ៍ និងបរិក្ខាផ្គត់ផ្គង់កសិកម្ម ,"Sale of agricultural machinery, equipment and supplies",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603074,ទិញលក់ជ័រកៅស៊ូ ,Sale of rubber,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603075,ទិញលក់ប្រេងដូង ,Sale of coconut oil,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603076,ទិញលក់ដំឡូងមី ,Sale of cassava,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603077,ទិញលក់ពោតឧស្សាហកម្ម ,Sale of industrial corn,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603078,ទិញលក់គ្រាប់ស្វាយចន្ទី ,Sale of cashew nuts,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603079,ទិញលក់វត្ថុធាតុដើមកសិកម្មផ្សេងទៀត ,Sale of other agricultural raw materials n.e.c,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603080,ទិញលក់ផលិតផល និងរ៉ែលោហធាតុពាក់កណ្តាល,Buy and sell semi-metallic products and minerals,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603081,ទិញលក់ឈើហុប ឈើអារ​ ក្តារបន្ទះ បន្ទះក្តារស្តើង និង,"Buy and sell logs, sawn wood, plywood, plywood and",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603082,ទិញលក់ថ្នាំលាប​ និងថ្នាំលាបឈើឲ្យរលោង ,Sale of paints and varnish,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603083,ទិញលក់ឧបករណ៍ និងសម្ភារៈសំណង់ ,Sale of construction materials & tools,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603084,ទិញលក់គ្រឿងសម្រាប់បន្ថែមភ្ជាប់លើអគារ ឬសង្ហារឹម ,Sale of fittings and fixtures,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603085,ទិញលក់ម៉ាស៊ីនទឹកក្តៅ និងឧបករណ៍អនាម័យ និងម៉ាស៊ីន,Buy and sell water heaters and sanitary ware and machines,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603086,ទិញលក់សារធាតុគីមីសម្រាប់ឧស្សាហកម្ម ,Sale of industrial chemicals,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603087,ទិញលក់ជី និងផលិតផលគីមីកសិកម្ម ,Sale of fertilizers and agrochemical products,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603088,ទិញលក់សម្ភារៈធ្វើពីប្លាស្ទិកមិនទាន់កែច្នៃ ,Sale of plastic materials in primary forms,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603089,ទិញលក់សរសៃអំបោះវាយនភ័ណ្ឌ។ល។ ,"Sale of textile fibres, etc",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603090,ទិញលក់ក្រដាសក្នុងចំនួនច្រើន និងសម្ភារៈវេចខ្ចប់ ,"Sale of paper in bulk, packaging materials",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603091,ទិញលក់កាកសំណល់ និងកម្ទេចកម្ទី ,Sale of waste and scrap,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603092,ការរុះកម្ទេចរថយន្ត កុំព្យូទ័រ ទូរទស្សន៍ និងឧបករណ៍ផ្សេ,"Demolition of cars, computers, televisions and other devices",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603093,ទិញលក់កម្ទេចកម្ទី កាកសំណល់ និងផលិតផលផ្សេងៗ ,Sale of waste and scrap and other products n.e.c.,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603094,ទិញលក់ម៉ាស៊ីនផ្សេងៗសម្រាប់ប្រើប្រាស់នៅក្នុងឧស្សាហ,Buy and sell machines for industrial use,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603095,ទិញលក់តាមកន្លែងបញ្ជាទិញតាមសារ ឬតាមអ៊ីនធឺណេត ,Sale via mail order houses or via Internet,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603096,ទិញលក់ដោយទទួលប្រាក់កម្រៃ ឬផ្អែកលើកិច្ចសន្យា ,Sale on a fee or contract basis,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603097,ទិញលក់ផ្សេងទៀតដែលមិននៅក្នុងហាង តូប ឬទីផ្សារ ,"Other sale not in stores, stalls or markets n.e.c",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603098,ទិញលក់ថ្នាំកម្ចាត់សត្វល្អិត ,Sale of pesticides,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603099,ទិញលក់ពោត ,Sale of maize,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603100,ទិញលក់សណ្តែកប្រេង ,Sale of oil seeds,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603101,ទិញលក់បន្លែយកដើម និងស្លឹក ,Sale of leafy or stem vegetables,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603102,ទិញលក់បន្លែយកផ្លែ ,Sale of fruits bearing vegetables,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603103,ទិញលក់កសិផលអម្បូរត្រសក់ផ្អែម ,Sale of melons,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603104,ទិញលក់ផ្សិត ,Sale of mushrooms,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603105,ទិញលក់បន្លែគ្រាប់ ,Sale of vegetables seeds,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603106,ទិញលក់បន្លែផ្សេងទៀត ,Sale of other vegetables,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603107,ទិញលក់កសិផលប្រភេទឬស ឬមើម  ដែលពុំបានរាប់បញ្ចូល ,"Sale of other roots, tubers, bulb or tuberous vegetables n.e.c",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603108,​ទិញលក់អំពៅ ,Sale of sugar cane,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603109,​ទិញលក់កប្បាស និងដំណាំសរសៃដទៃទៀត ,Sale of cotton and other fibre crops,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603110,​ទិញលក់សាគូ ,"Sale of sago, rumbia",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603111,​ទិញលក់ទំពាំងបាយជូរ ,Sale of grapes,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603112,​ទិញលក់ចេក ,Sale of banana,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603113,​ទិញលក់ស្វាយ ,Sale of mango,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603114,​ទិញលក់ធុរេន ,Sale of durian,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603115,​​ទិញលក់សាវម៉ាវ ,Sale of rambutan,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603116,​​ទិញលក់មៀន ,Sale of longan,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603117,​​ទិញលក់ល្ហុង ,Sale of papaya,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603118,​​ទិញលក់ម្នាស់ ,Sale of pineapple,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603119,​​ទិញលក់ស្រកានាគ ,"Sale of pitaya, dragon fruit",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603120,​​ទិញលក់ផ្លែឈើតំបន់ត្រូពិច និង អនុតំបន់ត្រូពិចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Sale of other tropical and subtropical fruits n.e.c.,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603121,​​ទិញលក់ក្រូចថ្លុង ,Sale of pomelo,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603122,​​ទិញលក់ក្រូចឆ្មារ ,Sale of lemons and limes,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603123,​​ទិញលក់ក្រូចឃ្វិច និងក្រូចពោធិ៍សាត់ ,"Sale of oranges, tangerines and mandarins",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603124,​​ទិញលក់ក្រូចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Sale of other citrus fruits n.e.c.,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603125,​​ទិញលក់ត្របែក ,Sale of guava,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603126,​​ទិញលក់ផ្លែឈើ និងមានគ្រាប់ដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Sale of other pome fruits and stones fruits n.e.c.,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603127,​​ទិញលក់ប៊ើរី ,Sale of berries,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603128,​​ទិញលក់កសិផលហូបគ្រាប់ ,Sale of fruit seeds,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603129,​​​​ទិញលក់ដូងប្រេង ,Sale of oil palm,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603130,​​​​ទិញលក់ដូង ,Sale of coconut,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603131,​ទិញលក់កាកាវ ,Sale of cocoa,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603132,ទិញលក់ម្រេច ,"Sale of black pepper, piper nigrum",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603133,​ទិញលក់ម្ទេស ,"Sale of chillies and peppers, capsicum spp.",020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603134,​ទិញលក់ខ្ញី ,Sale of ginger,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603135,​ទិញលក់ផ្លែឈើចម្រុះ ,Sale of mixed fruits,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603136,​ទិញលក់បន្លែចម្រុះ ,Sale of mixed vegetables,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603137,​ទិញលក់គ្រាប់ពូជចម្រុះ ,Sale of mixed seeds,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603138,​ទិញលក់ឈើចាក់ធ្មេញ ,Sale of toothpick,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020603139,​ទិញលក់ផ្សេងៗទៀត ដែលពុំបានរាប់បញ្ចូល ,Other sale n.e.c,020603,ផ្សេងៗ ,Others,0206,ការជួញដូរដុំ ,Wholesale Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701001,ការលក់រាយនូវយានយន្តថ្មីៗ ,Sale of new motor vehicles,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701002,ការលក់រាយនូវយានយន្តដែលប្រើប្រាស់រួច ,Sale of used motor vehicles,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701003,ការលក់នូវយានយន្តថ្មីសម្រាប់ឧស្សាហកម្ម ពាណិជ្ចកម្ម ,Selling new vehicles for the commercial industry,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701004,ការលក់នូវយានយន្តប្រើរួចសម្រាប់ឧស្សាហកម្ម ពាណិជ្ចកម្ម ,Sell ​​used vehicles for commercial industry,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701005,ការលក់រាយរាល់គ្រឿងបន្លាស់យានយន្ត គ្រឿង,Wholesale and retail of all auto parts,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701006,ការលក់រាយនុវទោចក្រយាន្តយន្ត រួមទាំងកង់មាន,"Wholesale and retail of motorcycles, including bicycles",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701007,លក់រាយ រួមទាំងការកម៉្មង់តាមសារនូវគ្រឿង,"Wholesale and retail, including text message ordering",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701008,ហាងលក់គ្រឿងទេស ,"Groceries, provision stores",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701009,ផ្សារទំនើប ,Supermarket,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701010,ផ្សារទំនើបខ្នាតតូច ,Mini marts,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701011,ផ្សារលក់ទំនិញធំៗដែលមាន ឬមិនមានផ្សារទំនើប ,Department stores with or without supermarket,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701012,ទិញលក់ទំនិញផ្សេងទៀតនៅក្នុងហាងមិនឯកទេស ,Sales in non-specialized stores n.e.c.,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701013,ទិញលក់ស្រូវ ,Sale of paddy,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701014,ទិញលក់អង្ករ ,Sale of rice,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701015,ទិញលក់ស្រូវ និងអង្ករ ,Sale of paddy and rice,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701016,ទិញលក់ម្សៅ គ្រាប់ធញ្ញជាតិ និងស្ករ ,"Sale of flour, other grains and sugars",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701017,ទិញលក់អង្ករ ម្សៅ គ្រាប់ធញ្ញជាតិ និងស្ករ ,"Sale of rice, flour, other grains and sugars",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701018,ទិញលក់បន្លែ និងផ្លែឈើស្រស់ ឬរក្សាទុកក្រៀម ,Sale of fresh or preserved vegetables and fruits,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701019,ទិញលក់សាច់ និងផលិតផលសាច់ រួមទាំងបក្សី ,Sale of meat and meat products including poultry,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701020,ទិញលក់ត្រី គ្រឿងសមុទ្រ និងផលិតផលដូចនេះ ,"Sale of fish, other seafood and products thereof",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701021,ទិញលក់ ផលិតផលនុំបុ័ង ,Sale of bakery products,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701022,ទិញលក់ផលិតផលស្ករគ្រាប់ និងនំ ,Sale of sugar confectionery,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701023,ទិញលក់មី ស្បែក និងផលិតផលអាហារផ្សេងទៀតធ្វើពី,Buy and sell skin noodles and other food products made from,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701024,ទិញលក់ផលិតផលដែលថ្វើពីទឺកដោះគោ ,Sale of dairy products,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701025,ទិញលក់នៅផលិតផលអាហារផ្សេងៗ ,Sale of other food products n.e.c.,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701026,ទិញលក់ស្រាបៀរ ស្រា និងគ្រឿងស្រវឹងផ្សេងទៀត ,"Sale of beer, wine and spirits",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701027,ទិញលក់តែ កាហ្វេ និងភេសជ្ជៈផ្សេងទៀត ,"Sale of tea, coffee and other beverages",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701028,ទិញលក់ភេសជ្ជៈ ទឹកច្រកដប និងទឹកកក ,"Sale of soft drinks, bottled water, and ice",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701029,ទិញលក់ផលិតផលថ្នាំជក់និងថ្នាំជក់ ,Sale of tobacco products & tobacco,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701030,ទិញលក់ប្រេងសាំង ប្រេងម៉ាស៊ូត ប្រេងរមអិល ,Sale of fuel for motor vehicles and motorcycles,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701031,ទិញលក់ឧស្ម័នឥន្ធនៈរាវ​ ,Liquefied Petroleum Gas Sale of liquefied petroleum gas,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701032,ទិញលក់ផលិតផលឥន្ធនៈរឹង រាវ និងឧស្ម័ន និងផលិត,"Buy and sell solid, liquid and gas products and manufacture",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701033,ទិញលក់កុំព្យូទ័រ និងឧបករណ៍បន្ទាប់បន្សំ ,Sale of computers and peripheral equipment,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701034,ទិញលក់ឧបករណ៍លេងហ្គេម ,Sale of video game consoles,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701035,ទិញលក់កម្មវិធីសម្រាប់ប្រើទូទៅ រួមមានវីដេអូហ្គេម ,"Sale of non-customized software, including video games",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701036,ទិញលក់ទូរស័ព្ទដៃ និងឧបករណ៍ទូរគមនាគមន៍ផ្សេងៗ ,Sale of mobile phones & other telecommunication equipment,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701037,ទិញលក់គ្រឿងវិទ្យុ និងទូរទស្សន៍ ,Sale of radio and television equipment,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701038,ទិញលក់ម៉ាស៊ីនចាក់ និងម៉ាស៊ីនថតស៊ីឌី និងឌីវីឌី និង,Buy and sell CD and DVD players and recorders;,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701039,ទិញលក់ផលិតផលវាយនភណ្ឌ ក្រណាត់ និងអំបោះ,"Buy and sell textiles, fabrics and yarns",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701040,ទិញលក់កម្រាលព្រំ និងក្រណាត់ជូតជើង ,Sale of carpets and rugs,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701041,ទិញលក់វាំងនន និងវាំងននសំណាញ់ ,Sale of curtains and net curtains,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701042,ទិញលក់ក្រដាសបិទជញ្ជាំង ឥដ្ឋស៊ីរ៉ាមិច និងកម្រាល,"Buy and sell wallpaper, ceramic tiles and flooring",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701043,ទិញលក់គ្រឿងសង្ហារឹមនៅក្នុងផ្ទះ ,Sale of household furniture,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701044,ទិញលក់គ្រឿងបំភ្លឺ ,Sale of articles for lighting,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701045,ទិញលក់សម្ភារៈប្រើក្នុងផ្ទះបាយ កាំបិត ចង្រ្កាន កេវ ចាន ,"Buy and sell kitchen utensils, knives, cookers, dishes",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701046,ទិញលក់ឧបករណ៍ប្រើក្នុងផ្ទះ ,Sale of household appliances,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701047,ទិញលក់ឧបករណ៍តន្រ្តីសៀវភៅភ្លេង ,Sale of musical instruments and scores,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701048,ទិញលក់ប្រព័ន្ធសុវត្ថិភាព ,Sale of security systems,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701049,ទិញលក់ឧបករណ៍និងសម្ភារៈប្រើក្នុងគ្រួសារដែលមិនបាន,Buy and sell household appliances and equipment that are not,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701050,ទិញលក់ឧបករណ៍ និងបរិក្ខារប្រើក្នុងការិយាល័យ ,Sale of office supplies and equipment,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701051,ទិញលក់សៀវភៅ កាសែត ​សម្ភារៈការិយាល័យ ,"Sale of books, newspapers and stationary",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701052,ទិញលក់តន្រ្តី និងវីដេអូ ដែលថតដាក់ឌីស​ វីស៊ីឌី និង ឌីវីឌី ,"Sale of music and video recordings on compact discs, VCDs and DVDs",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701053,ទិញលក់ទំនិញ និងឧបករណ៍កីឡា​ រួមមានប្រដាប់ស្ទូចត្រី ,"Sale of sports goods and equipment, including fishing gear",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701054,ទិញលក់ទំនិញសម្រាប់បោះជំរំ ,Sale of camping goods,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701055,ទិញលក់ទូក និងឧបករណ៍ពាក់ព័ន្ធ ,Sale of boats and equipments,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701056,ទិញលក់កង់ និងគ្រឿងបន្លាស់ និងគ្រឿងបន្ទាប់បន្សំ ,Sale of bicycles and related parts and accessories,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701057,ទិញលក់ហ្គេម និងប្រដាប់ក្មេងលេង ធ្វើពីគ្រប់សារធាតុ ,"Sale of games and toys, made of all materials",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701058,ទិញលក់សម្លៀកបំពាក់ និងគ្រឿងបន្ទាប់បន្សំ ,Sale of articles of clothing and accessories,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701059,ទិញលក់ផលិតផលពាក់នឹងជើង ,Sale of footwear,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701060,ហាងមានឯកទេសលក់ដុំនិងរាយឳសថ ,Stores specialized in sale of pharmaceuticals,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701061,ហាងមានឯកទេសលក់ដុំនិងរាយទឹកអប់ និងគ្រឿង,The shop specializes in wholesale and retail of perfumes and accessories.,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701062,ទិញលក់ឧបករណ៍ថតរូប និងផលិតផលទាក់ទង ,Sale of photographic and precision equipment,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701063,ទិញលក់នាឡិកាដៃ នាឡិកាព្យួរជញ្ជាំង និងគ្រឿងអលង្ការ ,"Sale of watches, clocks and jewellery",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701064,ទិញលក់ផ្កា រុក្ខជាតិ គ្រាប់ពូជ ,"Sale of flowers, plants, seeds, fertilizers",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701065,ទិញលក់វត្ថុអនុស្សាវរីយ៍ ផលិតផលសិប្បកម្ម សម្ភារៈ ,"Buy and sell souvenirs, handicrafts, materials",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701066,ទិញលក់ប្រេងសំរាប់ប្រើក្នុងផ្ទះ ហ្គាសកំប៉ុង ធ្យូង​ អុស ,"Sale of household fuel oil, bottled gas, charcoal and fuel wood",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701067,ទិញលក់វ៉ែនតា និងផលិតផលអុបទិកផ្សេងៗទៀត ,Sale of spectacles and other optical goods,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701068,ទិញលក់ត្រី សត្វចិញ្ចឹម និងចំណីសម្រាប់សត្វចិញ្ចឹម ,"Sale of aquarium fishes, pet animals and pet food",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701069,ទិញលក់សៀវភៅជជុះ ,Sale of second-hand books,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701070,ទិញលក់ផលិតផលអគ្គីសនី និងអេឡិចត្រូនិចជជុះ ,Sale of second-hand electrical and electronic goods,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701071,ទិញលក់វត្ថុបុរាណ ,Sale of antiques,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701072,ទិញលក់ផលិតផលជជុះផ្សេងៗ ,Sale of second-hand goods n.e.c,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701073,ទិញលក់គ្រឿងម៉ាស៊ីនឧបករណ៍ និងបរិក្ខាផ្គត់ផ្គង់កសិកម្ម ,"Sale of agricultural machinery, equipment and supplies",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701074,ទិញលក់ជ័រកៅស៊ូ ,Sale of rubber,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701075,ទិញលក់ប្រេងដូង ,Sale of coconut oil,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701076,ទិញលក់ដំឡូងមី ,Sale of cassava,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701077,ទិញលក់ពោតឧស្សាហកម្ម ,Sale of industrial corn,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701078,ទិញលក់គ្រាប់ស្វាយចន្ទី ,Sale of cashew nuts,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701079,ទិញលក់វត្ថុធាតុដើមកសិកម្មផ្សេងទៀត ,Sale of other agricultural raw materials n.e.c,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701080,ទិញលក់ផលិតផល និងរ៉ែលោហធាតុពាក់កណ្តាល,Buy and sell semi-metallic products and minerals,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701081,ទិញលក់ឈើហុប ឈើអារ​ ក្តារបន្ទះ បន្ទះក្តារស្តើង និង,"Buy and sell logs, sawn wood, plywood, plywood and",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701082,ទិញលក់ថ្នាំលាប​ និងថ្នាំលាបឈើឲ្យរលោង ,Sale of paints and varnish,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701083,ទិញលក់ឧបករណ៍ និងសម្ភារៈសំណង់ ,Sale of construction materials & tools,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701084,ទិញលក់គ្រឿងសម្រាប់បន្ថែមភ្ជាប់លើអគារ ឬសង្ហារឹម ,Sale of fittings and fixtures,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701085,ទិញលក់ម៉ាស៊ីនទឹកក្តៅ និងឧបករណ៍អនាម័យ និងម៉ាស៊ីន,Buy and sell water heaters and sanitary ware and machines,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701086,ទិញលក់សារធាតុគីមីសម្រាប់ឧស្សាហកម្ម ,Sale of industrial chemicals,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701087,ទិញលក់ជី និងផលិតផលគីមីកសិកម្ម ,Sale of fertilizers and agrochemical products,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701088,ទិញលក់សម្ភារៈធ្វើពីប្លាស្ទិកមិនទាន់កែច្នៃ ,Sale of plastic materials in primary forms,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701089,ទិញលក់សរសៃអំបោះវាយនភ័ណ្ឌ។ល។ ,"Sale of textile fibres, etc",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701090,ទិញលក់ក្រដាសក្នុងចំនួនច្រើន និងសម្ភារៈវេចខ្ចប់ ,"Sale of paper in bulk, packaging materials",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701091,ទិញលក់កាកសំណល់ និងកម្ទេចកម្ទី ,Sale of waste and scrap,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701092,ការរុះកម្ទេចរថយន្ត កុំព្យូទ័រ ទូរទស្សន៍ និងឧបករណ៍ផ្សេ,"Demolition of cars, computers, televisions and other devices",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701093,ទិញលក់កម្ទេចកម្ទី កាកសំណល់ និងផលិតផលផ្សេងៗ ,Sale of waste and scrap and other products n.e.c.,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701094,ទិញលក់ម៉ាស៊ីនផ្សេងៗសម្រាប់ប្រើប្រាស់នៅក្នុងឧស្សាហ,Buy and sell machines for industrial use,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701095,ទិញលក់តាមកន្លែងបញ្ជាទិញតាមសារ ឬតាមអ៊ីនធឺណេត ,Sale via mail order houses or via Internet,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701096,ទិញលក់ដោយទទួលប្រាក់កម្រៃ ឬផ្អែកលើកិច្ចសន្យា ,Sale on a fee or contract basis,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701097,ទិញលក់ផ្សេងទៀតដែលមិននៅក្នុងហាង តូប ឬទីផ្សារ ,"Other sale not in stores, stalls or markets n.e.c",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701098,ទិញលក់ថ្នាំកម្ចាត់សត្វល្អិត ,Sale of pesticides,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701099,ទិញលក់ពោត ,Sale of maize,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701100,ទិញលក់សណ្តែកប្រេង ,Sale of oil seeds,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701101,ទិញលក់បន្លែយកដើម និងស្លឹក ,Sale of leafy or stem vegetables,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701102,ទិញលក់បន្លែយកផ្លែ ,Sale of fruits bearing vegetables,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701103,ទិញលក់កសិផលអម្បូរត្រសក់ផ្អែម ,Sale of melons,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701104,ទិញលក់ផ្សិត ,Sale of mushrooms,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701105,ទិញលក់បន្លែគ្រាប់ ,Sale of vegetables seeds,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701106,ទិញលក់បន្លែផ្សេងទៀត ,Sale of other vegetables,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701107,ទិញលក់កសិផលប្រភេទឬស ឬមើម  ដែលពុំបានរាប់បញ្ចូល ,"Sale of other roots, tubers, bulb or tuberous vegetables n.e.c",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701108,​ទិញលក់អំពៅ ,Sale of sugar cane,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701109,​ទិញលក់កប្បាស និងដំណាំសរសៃដទៃទៀត ,Sale of cotton and other fibre crops,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701110,​ទិញលក់សាគូ ,"Sale of sago,rumbia",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701111,​ទិញលក់ទំពាំងបាយជូរ ,Sale of grapes,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701112,​ទិញលក់ចេក ,Sale of banana,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701113,​ទិញលក់ស្វាយ ,Sale of mango,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701114,​ទិញលក់ធុរេន ,Sale of durian,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701115,​​ទិញលក់សាវម៉ាវ ,Sale of rambutan,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701116,​​ទិញលក់មៀន ,Sale of longan,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701117,​​ទិញលក់ល្ហុង ,Sale of papaya,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701118,​​ទិញលក់ម្នាស់ ,Sale of pineapple,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701119,​​ទិញលក់ស្រកានាគ ,"Sale of pitaya, dragon fruit",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701120,​​ទិញលក់ផ្លែឈើតំបន់ត្រូពិច និង អនុតំបន់ត្រូពិចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Sale of other tropical and subtropical fruits n.e.c.,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701121,​​ទិញលក់ក្រូចថ្លុង ,Sale of pomelo,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701122,​​ទិញលក់ក្រូចឆ្មារ ,Sale of lemons and limes,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701123,​​ទិញលក់ក្រូចឃ្វិច និងក្រូចពោធិ៍សាត់ ,"Sale of oranges, tangerines and mandarins",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701124,​​ទិញលក់ក្រូចដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Sale of other citrus fruits n.e.c.,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701125,​​ទិញលក់ត្របែក ,Sale of guava,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701126,​​ទិញលក់ផ្លែឈើ និងមានគ្រាប់ដទៃទៀត ដែលពុំបានរាប់បញ្ចូល ,Sale of other pome fruits and stones fruits n.e.c.,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701127,​​ទិញលក់ប៊ើរី ,Sale of berries,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701128,​​ទិញលក់កសិផលហូបគ្រាប់ ,Sale of fruit seeds,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701129,​​​​ទិញលក់ដូងប្រេង ,Sale of oil palm,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701130,​​​​ទិញលក់ដូង ,Sale of coconut,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701131,​ទិញលក់កាកាវ ,Sale of cocoa,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701132,ទិញលក់ម្រេច ,"Sale of black pepper,piper nigrum",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701133,​ទិញលក់ម្ទេស ,"Sale of chillies and peppers, capsicum spp.",020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701134,​ទិញលក់ខ្ញី ,Sale of ginger,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701135,​ទិញលក់ផ្លែឈើចម្រុះ ,Sale of mixed fruits,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701136,​ទិញលក់បន្លែចម្រុះ ,Sale of mixed vegetables,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701137,​ទិញលក់គ្រាប់ពូជចម្រុះ ,Sale of mixed seeds,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701138,​ទិញលក់ឈើចាក់ធ្មេញ ,Sale of toothpick,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701139,អេតចាយ ,Scrap,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020701140,​ទិញលក់ផ្សេងៗទៀត ដែលពុំបានរាប់បញ្ចូល ,Other sale n.e.c,020701,ការជួញដូររាយ ,Retail trade,0207,ការជួញដូររាយ ,Retail Trade,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020801001,សណ្ឋាគារនិងសណ្ឋាគារីសត ,Hotels and resort hotels,020801,ការស្នាក់នៅ ,Accommodation,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020801002,ម៉ូតែល ,Motels,020801,ការស្នាក់នៅ ,Accommodation,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020801003,សណ្ឋាគា អាផាតមិន ,"Apartment hotels, serviced apartment",020801,ការស្នាក់នៅ ,Accommodation,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020801004,ផ្ទះសំណាក់ ផ្ទះជួល ,Guest house/ Rest house,020801,ការស្នាក់នៅ ,Accommodation,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020801005,ផ្ទះស្នាក់អាស្រ័យ ,Homestay,020801,ការស្នាក់នៅ ,Accommodation,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020801006,សកម្មភាពសេវាកម្មស្នាក់នៅ ដទៃទៀតដែលពុំបានរាប់បញ្ចូល ,Other short term accommodation activities n.e.c.,020801,ការស្នាក់នៅ ,Accommodation,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020801007,កន្លែងបោះជុំរំ ចំណតសម្រាប់យានយន្តទេសចរណ៍ ,Camping grounds and recreational vehicle parks,020801,ការស្នាក់នៅ ,Accommodation,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020801008,កន្លែងស្នាក់នៅរបស់និស្សិត និងអន្តេវាសិកដ្ឋានសម្រាប់,Student Accommodation and Dormitory for,020801,ការស្នាក់នៅ ,Accommodation,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020801009,អន្តេវាសិកដ្ឋានផ្សេងៗទៀត ,Other accommodation,020801,ការស្នាក់នៅ ,Accommodation,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802001,ភោជនីយដ្ឋាន និងកន្លែងស៊ីផឹករង្គសាល ,Restaurants and restaurant cum night clubs,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802002,កន្លែងលក់អាហាររហ័ស ,Fast-food restaurants,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802003,ហាងលក់ការ៉េម និងការដើរលក់តាមរថយន្ត ,Ice cream parlours and truck vendors,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802004,រទេះចល័តលក់អាហារ ,Mobile food carts,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802005,ស្តង់លក់ម្ហូបអាហារអ្នកដើរលក់​ និងការរៀបចំលក់ម្ហូប,"Food Stalls, Vendors and Catering",020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802006,ការផ្គត់ផ្គង់ម្ហូបអាហារដល់កម្មវិធី ,Event caterers,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802007,សកម្មភាពផ្តល់សេវាកម្មម្ហូបអាហារដទៃទៀត ,Other food service activities,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802008,តៀមស្រា រង្គសាល​ ឌីស្កូ​ បៀរហ្គាដិន និងហាងខារ៉ាអូខេ ,"Pubs, bars, discotheques, cocktail lounges and karaoke",020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802009,ហាងតែ​ និងកាហ្វេ ,Tea and coffee shops,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802010,តូបលក់ភេសជ្ចៈ ,Drink stalls/hawkers,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802011,រទេះលក់ភេសជ្ជៈចល័ត ,Mobile beverage,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020802012,កន្លែងផ្តល់សេវាកម្មភេសជ្ជៈ និងអាហារផ្សេងៗ,Food & Beverage Service,020802,សកម្មភាពសេវាកម្មម្ហូបអាហារនិងភេសជ្ជៈ ,Food and beverage service activities,0208,សណ្ឋារគារនិងភោជនីយដ្ឋាន ,Hotels and Restaurants,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901001,ការដឹកជញ្ជូនអ្នកដំណើរតាមផ្លូវដែក ឬរវាងទីប្រជុំជន ,Passenger transport by inter-urban railways,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901002,ការដឹកជញ្ជូនទំនិញតាមផ្លូវដែករវាងទីប្រជុំជន តំបន់ជាយ,Freight transport by rail between suburban towns,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901003,សេវាកម្មរថយន្តដឹកអ្នកដំណើរនៅក្រុង ,City bus services,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901004,សេវាកម្មរថយន្តដឹកអ្នកដំណើរតាមជនបទនិងរវាងទីក្រុង ,Inter-city and rural bus services,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901005,សេវាកម្មរថយន្តឈ្នួល និងរថយន្តទំនើប ,Taxi operation and limousine services,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901006,ការជួលរថយន្តដោយមានអ្នកបើកបរ ,Rental of cars with driver,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901007,រ៉ឺមកម៉ូតូ ,Romak motor,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901008,ម៉ូតូឌុប ,Motorcycle taxis,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901009,ការដឹកជញ្ជូនអ្នកដំណើរតាមផ្លូវគោកផ្សេងទៀត ,Other passenger land transport n.e.c.,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901010,ការដឹកជញ្ជូនទំនិញតាមផ្លូវគោក ,Freight transport by road,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020901011,ការដឹកជញ្ជូនតាមប្រព័ន្ធបំពង់  ,Transport via pipeline,020901,ការដឹកជញ្ជូនតាមផ្លូវគោកនិងការដឹកជញ្ជូនតាមបំពង់,Land transport and transport via pipelines,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020902001,ការដឹកជញ្ជូនអ្នកដំណើរតាមទឹកសមុទ្រជ្រៅ និងក្បែរតំបន់,Deep and near sea transport,020902,ការដឹកជញ្ជូនទឹក,Water transport,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020902002,ការដឹកជញ្ជូនទំនិញតាមទឹកសមុទ្រជ្រៅ និងក្បែរតំបន់ឆ្នេរ ,Sea and coastal freight water transport,020902,ការដឹកជញ្ជូនទឹក,Water transport,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020902003,សាឡាង ,Ferries,020902,ការដឹកជញ្ជូនទឹក,Water transport,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020902004,ការដឹកជញ្ជូនអ្នកដំណើរតាមទន្លេ ព្រែក បឹង និងផ្លូវទឹក,"Transportation of passengers along rivers, canals, lakes and waterways",020902,ការដឹកជញ្ជូនទឹក,Water transport,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020902005,ការជួលទូកជិះកម្សាន្តដោយមានអ្នកបើកបរសម្រាប់ដឹក,Boat rental with driver for transport,020902,ការដឹកជញ្ជូនទឹក,Water transport,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020902006,ការដឹកជញ្ជូនទំនិញតាមទន្លេ ព្រែក បឹង និងផ្លូវទឹកសាប,"Freight on rivers, canals, lakes and inland waterways",020902,ការដឹកជញ្ជូនទឹក,Water transport,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020903001,ការដឹកជញ្ជូនអ្នកដំណើរតាមផ្លូវអាកាស ,Passenger air transport,020903,ការដឹកជញ្ជូនតាមអាកាស,Air transport,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020903002,ការដឹកជញ្ជូនទំនិញតាមផ្លូវអាកាស ,Freight air transport,020903,ការដឹកជញ្ជូនតាមអាកាស,Air transport,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904001,សេវាកម្មស្តុកទំនិញក្នុងឃ្លាំងនិងការស្តុកទុក ,Warehousing and storage services,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904002,ប្រតិបត្តិការទីកន្លែងចំណត ,Operation of terminal facilities,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904003,ប្រតិបត្តិការផែស្ងួត ,Operation of dry ports,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904004,ប្រតិបត្តិការកន្លែងចំណតសម្រាប់យានយន្ត ,"Operation of parking facilities for motor vehicles, parking lots",020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904005,"សកម្មភាពសេវាកម្មអមផ្សេងៗទៀតសម្រាប់ការដឹកជញ្ជូនផ្លូវគោកដែលមិនបានរាប់បញ្ចូល",Other service activities incidental to land transportation n.e.c.,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904006,សេវាកម្មប្រតិបត្តិការកំពង់ផែ ,Harbor/port operation services,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904007,សេវាកម្មជួយស្រង់និងការដាក់បណ្តែតទឹកកប៉ាល់ឡើងវិញ ,Vessel salvage and refloating services,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904008,"សកម្មភាពសេវាកម្មអមផ្សេងទៀតសម្រាប់ការដឹកជញ្ជូនតាមផ្លូវទឹកដែលមិនបានរាប់បញ្ចូល",Other service activities incidental to water transportation n.e.c.,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904009,សកម្មភាពសេវាកម្មអមសម្រាប់ការដឹកជញ្ជូនផ្លូវអាកាស ,Service activities incidental to air transportation,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904010,ការទុកដាក់ទំនិញ ,Cargo handling,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904011,ការបញ្ជូនទំនិញ ,Forwarding of freight,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904012,ការចេញ និងផ្គត់ផ្គត់ឯកសារដឹកជញ្ជូន ,Issue and procurement of transport documents and waybills,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904013,សកម្មភាពភ្នាក់ងាររៀបចំឯកសារគយ ,Activities of customs agents,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020904014,សកម្មភាពគាំទ្រការដឹកជញ្ជូនដទៃផ្សេងទៀតដែលមិនបានរាប់បញ្ចូល ,Other transportation support activities n.e.c.,020904,ឃ្លាំងនិងគាំទ្រសកម្មភាពដឹកជញ្ជូន,Warehousing and support activities for transportation,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020905001,សកម្មភាពសេវាកម្មប្រៃសណីយ៍ ,National postal services,020905,សកម្មភាពប្រៃសណីយ៍និងនាំសំបុត្រ,Postal and courier activities,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  020905002,សកម្មភាពអ្នកផ្តល់សេវាកម្មបញ្ញើក្រៅពីសកម្មភាពប្រៃ,Courier activities other than national post activities,020905,សកម្មភាពប្រៃសណីយ៍និងនាំសំបុត្រ,Postal and courier activities,0209,ដឺកជញ្ជូននិងស្តុកបណ្តោះអាសន្ន ,Transport and Storage,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021001001,"ការបោះពុម្ពផ្សាយសៀវភៅ កូនសៀវភៅឃោសនា និងការបោះពុម្ពផ្សាយផ្សេងទៀត","Publishing of books, brochures and other publications",021001,សកម្មភាពផ្សព្វផ្សាយ,Publishing activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021001002,"ការបោះពុម្ពផ្សាយបញ្ជីអាសយដ្ឋាន សៀវភៅលេខទូរស័ព្ទនិងសៀវភៅរាយឈ្មោះផ្សេងទៀត។ល។","Publishing of mailing lists, telephone book , other directories, etc.",021001,សកម្មភាពផ្សព្វផ្សាយ,Publishing activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021001003,"ការបោះពុម្ពផ្សាយកាសែត ព្រឹត្តិបត្រ ទស្សនាវដ្តី និងកាលិកបត្រក្នុងទម្រង់ជាក្រដាស ឬអេឡិចត្រូនិច","Publishing of newspapers, journals, magazines and periodicals in print or electronic form",021001,សកម្មភាពផ្សព្វផ្សាយ,Publishing activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021001004,"ការបោះពុម្ពផ្សាយសៀវភៅម៉ូដ រូបថត ចម្លាក់ និងប្រៃសណីយ៍បត្រលិខិតបដិសណ្ឋារកិច្ច​ ទម្រង់ ប័ណ្ណប្រកាសការផលិតឡើងវិញនូវស្នាដៃសិល្បៈ សម្ភារៈផ្សាយពាណិជ្ជកម្ម និងសម្ភារៈបោះពុម្ពផ្សេងៗទៀតដែលពុំបានរាប់បញ្ចូល","Publishing of catalogs, photos, engraving and postcards, greeting cards, forms, posters, reproduction of works of art, advertising material and other printed matter n.e.c.",021001,សកម្មភាពផ្សព្វផ្សាយ,Publishing activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021001005,ការចេញផ្សាយកម្មវិធីកុំព្យូទ័រដែលបង្កើតរួចស្រាប់,Publishing of ready-made software,021001,សកម្មភាពផ្សព្វផ្សាយ,Publishing activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021002001,សកម្មភាពផលិតភាពយន្ត កម្មវិធីទូរទស្សន៍​ និងវីដេអូ ,"Motion picture, video and television programme production activities",021002,ផលិតកម្មចលនាវីដេអូកម្មវិធីទូរទស្សន៍និងកម្មវិធីទូរទស្សន៍ការថតសំលេងនិងសកម្មភាពបោះពុម្ភតន្ត្រី,"Motion picture, video and television programme production, sound recording and music publishing activities",0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021002002,"សកម្មភាពក្រោយការផលិតភាពយន្ត កម្មវិធីទូរទស្សន៍ និងវីដេអូ","Motion picture, video and television programme post-production activities",021002,ផលិតកម្មចលនាវីដេអូកម្មវិធីទូរទស្សន៍និងកម្មវិធីទូរទស្សន៍ការថតសំលេងនិងសកម្មភាពបោះពុម្ភតន្ត្រី,"Motion picture, video and television programme production, sound recording and music publishing activities",0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021002003,សកម្មភាពចែកចាយភាពយន្ត កម្មវិធីទូរទស្សន៍ និងវីដេអូ ,"Motion picture, video and television programme distribution activities",021002,ផលិតកម្មចលនាវីដេអូកម្មវិធីទូរទស្សន៍និងកម្មវិធីទូរទស្សន៍ការថតសំលេងនិងសកម្មភាពបោះពុម្ភតន្ត្រី,"Motion picture, video and television programme production, sound recording and music publishing activities",0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021002004,"ប្រតិបត្តិការរបស់រោងភាពយន្ត សកម្មភាពចាក់បញ្ចាំងភាពយន្ត","Operation of cinemas, motion picture projection activities",021002,ផលិតកម្មចលនាវីដេអូកម្មវិធីទូរទស្សន៍និងកម្មវិធីទូរទស្សន៍ការថតសំលេងនិងសកម្មភាពបោះពុម្ភតន្ត្រី,"Motion picture, video and television programme production, sound recording and music publishing activities",0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021002005,សកម្មភាពថតសម្លេង​ និងចេញផ្សាយតន្រ្តី ,Sound recording and music publishing activities,021002,ផលិតកម្មចលនាវីដេអូកម្មវិធីទូរទស្សន៍និងកម្មវិធីទូរទស្សន៍ការថតសំលេងនិងសកម្មភាពបោះពុម្ភតន្ត្រី,"Motion picture, video and television programme production, sound recording and music publishing activities",0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021003001,ការផ្សាយវិទ្យុ ,Radio broadcasting,021003,សកម្មភាពផ្សព្វផ្សាយនិងសរសេរកម្មវិធី,Broadcasting and programming activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021003002,សកម្មភាពបង្កើតកម្មវិធី និងការផ្សាយទូរទស្សន៍ ,Television programming and TV broadcasting activities,021003,សកម្មភាពផ្សព្វផ្សាយនិងសរសេរកម្មវិធី,Broadcasting and programming activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021004001,សេវាកម្មទូរគមនាគមន៍មានខ្សែ ,Wired telecommunications services,021004,ទូរគមនាគមន៍,Telecommunications,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021004002,សេវាកម្មទូរគមនាគមន៍ឥតខ្សែ ,Wireless telecommunications services,021004,ទូរគមនាគមន៍,Telecommunications,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021004003,សេវាកម្មទូរគមនាគមន៍ផ្កាយរណប ,Satellite telecommunications services,021004,ទូរគមនាគមន៍,Telecommunications,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021004004,ហាងអ៊ីនធឺណេត ការផ្តល់សេវាកម្មអ៊ីនធឺណេតនៅកន្លែង,Internet shop Internet service on site,021004,ទូរគមនាគមន៍,Telecommunications,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021004005,សកម្មភាពទូរគមនាគមន៍ផ្សេងទៀត ដែលពុំបានរាប់បញ្ចូល ,Other telecommunications activities n.e.c.,021004,ទូរគមនាគមន៍,Telecommunications,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021005001,សកម្មភាពបង្កើតកម្មវិធីកុំព្យូទ័រ​ ,Computer programming activities,021005,កម្មវិធីកុំព្យូទ័រប្រឹក្សានិងសកម្មភាពពាក់ព័ន្ធ,"Computer programming, consultancy and related activities",0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021005002,សកម្មភាពពិគ្រោះយោបល់កុំព្យូទ័រ និងការគ្រប់គ្រងសម្ភារៈ,Computer consulting and material management activities,021005,កម្មវិធីកុំព្យូទ័រប្រឹក្សានិងសកម្មភាពពាក់ព័ន្ធ,"Computer programming, consultancy and related activities",0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021005003,សកម្មភាពសេវាកម្មពត៌មានវិទ្យាផ្សេងទៀត ដែលពុំបានរាប់,Other IT services activities not counted,021005,កម្មវិធីកុំព្យូទ័រប្រឹក្សានិងសកម្មភាពពាក់ព័ន្ធ,"Computer programming, consultancy and related activities",0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021006001,ការបំប្លែងទិន្នន័យ ការដាក់ដំណើរការលើអ៊ីនធឺណេត និង,"Data Transformation, Internet Launch and",021006,សកម្មភាពសេវាកម្មព័ត៌មាន,Information service activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021006002,ប្រព័ន្ធស្វែងរកតាមអ៊ីនធឺណេត ,Web portals,021006,សកម្មភាពសេវាកម្មព័ត៌មាន,Information service activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021006003,បណ្ណាញផ្សព្វផ្សាយពត៌មាន និងសកម្មភាពរបស់ទីភ្នាក់ងារពត៌មាន ដូចជា ការផ្តល់ពត៌មាន រូបភាព និងសាច់,"Dissemination of information and activities of news agencies, such as providing information, images and meat",021006,សកម្មភាពសេវាកម្មព័ត៌មាន,Information service activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021006004,សកម្មភាពសេវាកម្មពត៌មានផ្សេងទៀត ដែលពុំបានរាប់,Other information service activities not counted,021006,សកម្មភាពសេវាកម្មព័ត៌មាន,Information service activities,0210,បណ្តាញព័ត៌មាននិងទូរគមនាគមន៍ ,Information Media and Telecommunications,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021101001,សកម្មភាពភ្នាក់ងារជ្រើសរើសការងារ ,Activities of employment placement agencies,021101,សកម្មភាពការងារ,Employment activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021101002,សកម្មភាពភ្នាក់ងារការងារបណ្តោះអាសន្ន ,Temporary employment agency activities,021101,សកម្មភាពការងារ,Employment activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021101003,ការផ្តល់ធនធានមនុស្សសម្រាប់អាជីវកម្មអតិថិជន ,Provision of human resources for client businesses,021101,សកម្មភាពការងារ,Employment activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021102001,សកម្មភាពភ្នាក់ងារទេសចរណ៍ ,Travel agency activities,021102,ទីភ្នាក់ងារទេសចរណ៍ប្រតិបត្តិករសេវាកម្មកក់និងសកម្មភាពពាក់ព័ន្ធ,"Travel agency, tour operator, reservation service and related activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021102002,សកម្មភាពប្រតិបត្តិករទេសចរណ៍ ,Tour operator activities,021102,ទីភ្នាក់ងារទេសចរណ៍ប្រតិបត្តិករសេវាកម្មកក់និងសកម្មភាពពាក់ព័ន្ធ,"Travel agency, tour operator, reservation service and related activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021102003,សេវាកម្មកក់ផ្សេងទៀតនិងសកម្មភាពពាក់ព័ន្ធ ,Other reservation service and related activities,021102,ទីភ្នាក់ងារទេសចរណ៍ប្រតិបត្តិករសេវាកម្មកក់និងសកម្មភាពពាក់ព័ន្ធ,"Travel agency, tour operator, reservation service and related activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021103001,សកម្មភាពសន្តិសុខឯកជន ,Private security activities,021103,សន្តិសុខនិងសកម្មភាពស៊ើបអង្កេត,Security and investigation activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021103002,សកម្មភាពសេវាកម្មប្រព័ន្ធសន្តិសុខ ,Security systems service activities,021103,សន្តិសុខនិងសកម្មភាពស៊ើបអង្កេត,Security and investigation activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021103003,សកម្មភាពស៊ើបអង្កេតនិងការស៊ើបអង្កេត ,Investigation and detective activities,021103,សន្តិសុខនិងសកម្មភាពស៊ើបអង្កេត,Security and investigation activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021104001,សកម្មភាពរួមបញ្ចូលគ្នាគាំទ្រដល់សកម្មភាព ,Combined facilities support activities,021104,សេវាកម្មដល់អគារនិងសកម្មភាពទេសភាព,Services to buildings and landscape activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021104002,ការសំអាតទូទៅនៃអាគារ ,General cleaning of buildings,021104,សេវាកម្មដល់អគារនិងសកម្មភាពទេសភាព,Services to buildings and landscape activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021104003,សេវាកម្មសម្អាតនិងថែទាំអាងហែលទឹក ,Swimming pool cleaning and maintenance services,021104,សេវាកម្មដល់អគារនិងសកម្មភាពទេសភាព,Services to buildings and landscape activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021104004,ការបំផ្លាញនិងបំបាត់ចោលសកម្មភាព ,Disinfecting and exterminating activities,021104,សេវាកម្មដល់អគារនិងសកម្មភាពទេសភាព,Services to buildings and landscape activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021104005,ការសម្អាតឯកទេសផ្សេងទៀតនៃអគារនិងការសម្អាតទីតាំងឧស្សាហកម្មនិងផ្លូវ ,"Other specialized cleaning of buildings, and cleaning of industrial locations and streets",021104,សេវាកម្មដល់អគារនិងសកម្មភាពទេសភាព,Services to buildings and landscape activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021104006,សកម្មភាពសេវាកម្មថែទាំនិងថែទាំទេសភាព ,Landscape care and maintenance service activities,021104,សេវាកម្មដល់អគារនិងសកម្មភាពទេសភាព,Services to buildings and landscape activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021105001,សកម្មភាពសេវាកម្មរដ្ឋបាលការិយាល័យរួមបញ្ចូលគ្នា ,Combined office administrative service activities,021105,ការិយាល័យរដ្ឋបាលការគាំទ្រការិយាល័យនិងសកម្មភាពគាំទ្រអាជីវកម្មផ្សេងទៀត,"Office administrative, office support and other business support activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021105002,សកម្មភាពថតចម្លង ,Photocopying activities,021105,ការិយាល័យរដ្ឋបាលការគាំទ្រការិយាល័យនិងសកម្មភាពគាំទ្រអាជីវកម្មផ្សេងទៀត,"Office administrative, office support and other business support activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021105003,ការរៀបចំឯកសារនិងសកម្មភាពគាំទ្រការិយាល័យជំនាញផ្សេងទៀត ,Document preparation and other specialized office support activities,021105,ការិយាល័យរដ្ឋបាលការគាំទ្រការិយាល័យនិងសកម្មភាពគាំទ្រអាជីវកម្មផ្សេងទៀត,"Office administrative, office support and other business support activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021105004,សកម្មភាពមជ្ឈមណ្ឌលហៅទូរស័ព្ទ ,Activities of call centres,021105,ការិយាល័យរដ្ឋបាលការគាំទ្រការិយាល័យនិងសកម្មភាពគាំទ្រអាជីវកម្មផ្សេងទៀត,"Office administrative, office support and other business support activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021105005,ការរៀបចំសន្និបាតនិងពិព័រណ៍ពាណិជ្ជកម្ម ,Organization of conventions and trade shows,021105,ការិយាល័យរដ្ឋបាលការគាំទ្រការិយាល័យនិងសកម្មភាពគាំទ្រអាជីវកម្មផ្សេងទៀត,"Office administrative, office support and other business support activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021105006,សកម្មភាពរបស់ភ្នាក់ងារប្រមូលនិងការិយាល័យឥណទាន ,Activities of collection agencies and credit bureaus,021105,ការិយាល័យរដ្ឋបាលការគាំទ្រការិយាល័យនិងសកម្មភាពគាំទ្រអាជីវកម្មផ្សេងទៀត,"Office administrative, office support and other business support activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021105007,សកម្មភាពវេចខ្ចប់ដោយផ្អែកលើថ្លៃសេវាឬកិច្ចសន្យាទោះបីវាមិនពាក់ព័ន្ធនឹងដំណើរការស្វ័យប្រវត្តិក៏ដោយ ,"Packaging activities on a fee or contract basis, whether or not these involve an automated process",021105,ការិយាល័យរដ្ឋបាលការគាំទ្រការិយាល័យនិងសកម្មភាពគាំទ្រអាជីវកម្មផ្សេងទៀត,"Office administrative, office support and other business support activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021105008,សកម្មភាពសេវាកម្មគាំទ្រអាជីវកម្មផ្សេងៗទៀត ,Other business support service activities n.e.c.,021105,ការិយាល័យរដ្ឋបាលការគាំទ្រការិយាល័យនិងសកម្មភាពគាំទ្រអាជីវកម្មផ្សេងទៀត,"Office administrative, office support and other business support activities",0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106001,"ការជួល និងភតិសន្យាខាងប្រតិបត្តិការនូវរថយន្តដឹកអ្នកដំណើរដោយមិនយកអ្នកបើកបរ",Renting and operational leasing of passenger cars without driver,021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106002,"ការជួល និងភតិសន្យាខាងប្រតិបត្តិការ នូវរថយន្តដឹកទំនិញ រថយន្តសណ្តោង និងរថយន្តសម្រាប់កម្សាន្ត","Renting and operational leasing of trucks, utility trailers and recreational vehicles",021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106003,ការជួល និងភតិសន្យាសម្ភារៈកម្សាន្ត និងកីឡា ,Renting and leasing of personal and household goods,021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106004,ការជួលកាសែតវីដេអូ កាសែតខ្សែអាត់ស៊ីឌី ឌីវីឌី ។ល។,"Renting of video tapes, records, CDs, DVDs, etc.",021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106005,"សំពត់តង់​ តុ កៅអី និងឧបករណ៍ផ្សេងទៀតសម្រាប់ពិធីជប់លៀង និងពិធីផ្សេងៗ","Tents, tables, chairs and other equipment for parties and ceremonies",021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106006,សៀវភៅ ព្រឹត្តិបត្រ និងទស្សនាវដ្តី,"Books, journals and magazines",021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106007,ផ្កា និងរុក្ខជាតិ ,Flowers and plants,021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106008,"ការជួល និងភតិសន្យាទំនិញប្រើផ្ទាល់ខ្លួន និងសម្រាប់គ្រួសារដទៃទៀត ដែលពុំបានរាប់បញ្ចូល",Renting and leasing of other personal and household goods n.e.c.,021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106009,"​ការជួលនិងភតិសន្យាខាងប្រតិបត្តិការនូវឧបករណ៍ដឹកជញ្ជូនតាមផ្លូវគោក ក្រៅពីយានយន្ត",Renting and operational leasing of land- transport equipment other than motor vehicles,021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106010,"ការជួលនិងភតិសន្យាខាងប្រតិបត្តិការនូវឧបករណ៍ដឹកជញ្ជូនតាមផ្លូវទឹក ",Renting and operational leasing of water- transport equipment,021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106011,"ការជួលនិងភតិសន្យាខាងប្រតិបត្តិការនូវគ្រឿងយន្ត និងឧបករណ៍ សម្រាប់កសិកម្មនិងរុក្ខកម្ម",Renting and operational leasing of agricultural and forestry machinery and equipment,021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106012,"​ការជួលនិងភតិសន្យាខាងប្រតិបត្តិការនូវគ្រឿងយន្ត និងឧបករណ៍សម្រាប់សកម្មភាពសំណង់និងវិស្វកម្មស៊ីវិល",Renting and operational leasing of construction and civil-engineering machinery and equipment,021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106013,"​ការជួលនិងភតិសន្យាខាងប្រតិបត្តិការនូវគ្រឿងយន្ត គ្រឿងសង្ហារឹម និងឧបករណ៍ការិយាល័យ","Rental and operational leasing of office machinery, furniture and equipment",021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106014,"ការជួលនិងភតិសន្យាគ្រឿងយន្ត ឧបករណ៍និងទំនិញរូបីយ៍ដទៃផ្សេងទៀត ដែលពុំបានរាប់បញ្ចូល","Renting and leasing of other machinery, equipment and tangible goods n.e.c.",021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021106015,"ភតិសន្យាផលិតផលកម្មសិទ្ធបញ្ញា និងផលិតផលប្រហាក់ប្រហែល លើកលែងតែកាងារដែលបានរក្សាសិទ្ធ ","Leasing of intellectual property and similar products, except copyrighted works",021106,សកម្មភាពជួលនិងជួល,Rental and leasing activities,0211,អាជីវកម្មជួល និងភតិសន្យាប្រតិបត្តិការ មិនរាប់បញ្ចូលភតិសន្យានិងការជួលអចលនទ្រព្យ ,"Rental and Operational Leasing Activities, excluded Real Estate Leasing and Rentals",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021201001,ទិញលក់ ជួល និងប្រតិបត្ដិការនៃអចលនទ្រព្យឧស្សាហកម្ម ឃ្លាំង យានដ្ឋាន មជ្ឈមណ្ឌលចែកចាយ ,"Buying, selling, renting and operating of industrial property, warehourses, garages, distribution centres",021201,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យឧស្សាហកម្ម ,Real estate operation: industry,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021201002,ទិញលក់ ជួល និងប្រតិបត្ដិការនៃអចលនទ្រព្យនៅក្នុងតំបន់សេដ្ឋកិច្ច ,"Buying, selling, renting and operating of property in economic zones",021201,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យឧស្សាហកម្ម ,Real estate operation: industry,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021202001,ទិញលក់ និងជួលហាងលក់ ផ្សារទំនើប និងតូប ,"Buying, selling, and renting of stores, shopping malls, shops and their spaces",021202,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យពាណិជ្ជកម្ម,Real estate operation: Commercial,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021202002,ទិញលក់ និងជួលអគារការិយាល័យ ការិយាល័យផ្តល់សេវាកម្ម និងកន្លែងទំនេរ ,"Buying, selling, and renting of office buidlings, serviced offices and their spaces",021202,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យពាណិជ្ជកម្ម,Real estate operation: Commercial,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021202003,ទិញលក់ និងជួលមជ្ឈមណ្ឌលវេជ្ជសាស្រ្ត មន្ទីរពេទ្យ និងផ្ទះថែទាំ ,"Buying, selling, and renting of medical centres, hospitals, nursing homes",021202,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យពាណិជ្ជកម្ម,Real estate operation: Commercial,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021203001,ទិញលក់ និងជួលសួនកំសាន្ត ,"Buying, selling, and renting of parks",021203,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Real estate operation: tourism related,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021203002,ទិញលក់ និងជួលសណ្ឋាគារ ភោជនីយដ្ឋាន ហាងកាហ្វេ និងកន្លែងលេងកីឡា ,"Buying, selling, and renting of hotels, restuarants, cafes, and sport facilities",021203,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Real estate operation: tourism related,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021203003,ទិញលក់ និងជួលកន្លែងក្នុងតំបន់ទេសចរណ៍បេតិកភ័ណ្ឌ ,"Buying, selling, and renting of heritage tourism",021203,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Real estate operation: tourism related,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021203004,ទិញលក់ និងជួលកន្លែងក្នុងតំបន់ទេសចរណ៍បៃតង ,"Buying, selling, and renting of green tourism",021203,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Real estate operation: tourism related,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021203005,ទិញលក់ និងជួលកន្លែងក្នុងតំបន់ទេសចរណ៍សម្រាប់សុខភាព ,"Buying, selling, and renting of health tourism",021203,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Real estate operation: tourism related,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021203006,ទិញលក់ និងជួលកន្លែងក្នុងរមណីយដ្ឋាន ,"Buying, selling, and renting of resorts",021203,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យទេសចរណ៍ ,Real estate operation: tourism related,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021204001,ការទិញលក់ការជួល និងការធ្វើអាជីវកម្មអចលនវត្ថុ​ ,"Buying, selling, renting and doing real estate business",021204,ការជួញដូរអចលនទ្រព្យសម្រាប់លំនៅដ្ឋាន ,Real estate operation: residential,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021205001,សកម្មភាពរបស់ភ្នាក់ងារ ឬអន្តរការីអចលនវត្ថុ ,Activities of real estate agents and brokers,021205,ភ្នាក់ងារផ្តល់សេវាកម្មលើការជួញដូរអចលនទ្រព្យ ,Real estate service providers for a fee ;i.e. real estate agents and similar activities,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021205002,"ការគ្រប់គ្រងអចលនវត្ថុដោយថ្លែឈ្នួលជាក់ស្តែង ឬតាមកិច្ចសន្យា",Management of real estate on a fee or contract basis,021205,ភ្នាក់ងារផ្តល់សេវាកម្មលើការជួញដូរអចលនទ្រព្យ ,Real estate service providers for a fee ;i.e. real estate agents and similar activities,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021205003,សេវាកម្មវាយតម្លៃអចលនវត្ថុ ,Appraisal services for real estate,021205,ភ្នាក់ងារផ្តល់សេវាកម្មលើការជួញដូរអចលនទ្រព្យ ,Real estate service providers for a fee ;i.e. real estate agents and similar activities,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021205004,"ការគ្រប់គ្រងអចលនវត្ថុដោយថ្លែឈ្នួលជាក់ស្តែង ឬតាមកិច្ចសន្យាដទៃទៀតដែលពុំបានរាប់បញ្ចូល",Real estate activities on a fee or contract basis n.e.c.,021205,ភ្នាក់ងារផ្តល់សេវាកម្មលើការជួញដូរអចលនទ្រព្យ ,Real estate service providers for a fee ;i.e. real estate agents and similar activities,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021206001,ទិញលក់ និងជួលអចលនទ្រព្យសម្រាប់វិស័យផ្សេងៗ ,"Buying, selling, renting and operating of other real estate",021206,ការជួញដូរអចលនទ្រព្យសម្រាប់វិស័យផ្សេងៗ ,Real estate operation: others,0212,ការជួញដូរអចលនទ្រព្យ ,Real Estate Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021301001,អ្នកផលិតល្ខោនក្រុមចម្រៀងនិងក្រុមតន្រ្តីកំសាន្ត ,"Theatrical producer, singer group band and orchestra entertainment services",021301,សកម្មភាពច្នៃប្រឌិតសិល្បៈនិងការកម្សាន្ត,"Creative, arts and entertainment activities",0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021301002,ប្រតិបត្ដិការនៃសាលប្រគុំតន្ត្រីនិងល្ខោននិងកន្លែងសិល្បៈផ្សេងទៀត ,Operation of concert and theatre halls and other arts facilities,021301,សកម្មភាពច្នៃប្រឌិតសិល្បៈនិងការកម្សាន្ត,"Creative, arts and entertainment activities",0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021301003,សកម្មភាពរបស់ជាងចម្លាក់ជាងគំនូរអ្នកគូររូបគំនូរជីវចលអ្នកឆ្លាក់អ្នកឆ្លាក់ជាដើម។ ,"Activities of sculptors, painters, cartoonists, engravers, etchers, etc.",021301,សកម្មភាពច្នៃប្រឌិតសិល្បៈនិងការកម្សាន្ត,"Creative, arts and entertainment activities",0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021301004,សកម្មភាពរបស់អ្នកកាសែតឯករាជ្យនិងអ្នកនិពន្ធបុគ្គលផ្សេងទៀតសម្រាប់មុខវិជ្ជាទាំងអស់ ,"Activities of independent journalists and other individual writers, for all subjects",021301,សកម្មភាពច្នៃប្រឌិតសិល្បៈនិងការកម្សាន្ត,"Creative, arts and entertainment activities",0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021301005,សកម្មភាពច្នៃប្រឌិតសិល្បៈនិងកម្សាន្ត។ ល។ ,"Creative, arts and entertainment activities n.e.c.",021301,សកម្មភាពច្នៃប្រឌិតសិល្បៈនិងការកម្សាន្ត,"Creative, arts and entertainment activities",0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021302001,សកម្មភាពបណ្ណាល័យនិងបណ្ណសារ ,Library and archives activities,021302,បណ្ណាល័យបណ្ណសារសារមន្ទីរនិងសកម្មភាពវប្បធម៌ផ្សេងៗទៀត,"Libraries, archives, museums and other cultural activities",0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021302002,សកម្មភាពសារមន្ទីរនិងប្រតិបត្តិការទីតាំងប្រវត្តិសាស្ត្រនិងអាគារ ,Museums activities and operation of historical sites and buildings,021302,បណ្ណាល័យបណ្ណសារសារមន្ទីរនិងសកម្មភាពវប្បធម៌ផ្សេងៗទៀត,"Libraries, archives, museums and other cultural activities",0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021302003,សួនរុក្ខសាស្ត្រនិងសួនសត្វនិងធម្មជាតិបម្រុងទុក ,Botanical and zoological gardens and nature reserves activities,021302,បណ្ណាល័យបណ្ណសារសារមន្ទីរនិងសកម្មភាពវប្បធម៌ផ្សេងៗទៀត,"Libraries, archives, museums and other cultural activities",0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021303001,សកម្មភាពលេងល្បែងនិងភ្នាល់ ,Gambling and betting activities,021303,សកម្មភាពលេងល្បែងនិងភ្នាល់,Gambling and betting activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021304001,ប្រតិបត្តិការកន្លែងកីឡា ,Operation of sports facilities,021304,សកម្មភាពកីឡានិងសកម្មភាពកម្សាន្តនិងកំសាន្ត,Sports activities and amusement and recreation activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021304002,មណ្ឌលហាត់ប្រាណ ,Fitness centres,021304,សកម្មភាពកីឡានិងសកម្មភាពកម្សាន្តនិងកំសាន្ត,Sports activities and amusement and recreation activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021304003,ប្រតិបត្តិការរបស់ក្លិបកីឡាដូចជាក្លឹបបាល់ទាត់ក្លឹបបាល់ទះក្លឹបហែលទឹក។ ល។ ,"The operation of sports clubs such as football club, bowling club, swimming club, etc.",021304,សកម្មភាពកីឡានិងសកម្មភាពកម្សាន្តនិងកំសាន្ត,Sports activities and amusement and recreation activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021304004,Acសកម្មភាពរបស់អ្នកផលិតឬផ្សព្វផ្សាយព្រឹត្តិការណ៍កីឡាដោយមានឬគ្មានកន្លែង ,"tivities of producers or promoters of sports events, with or without facilities",021304,សកម្មភាពកីឡានិងសកម្មភាពកម្សាន្តនិងកំសាន្ត,Sports activities and amusement and recreation activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021304005,សកម្មភាពនៃលីកកីឡានិងអង្គភាពគ្រប់គ្រង ,Activities of sports leagues and regulating bodies,021304,សកម្មភាពកីឡានិងសកម្មភាពកម្សាន្តនិងកំសាន្ត,Sports activities and amusement and recreation activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021304006,សកម្មភាពកីឡាផ្សេងៗ ,Other sports activities n.e.c.,021304,សកម្មភាពកីឡានិងសកម្មភាពកម្សាន្តនិងកំសាន្ត,Sports activities and amusement and recreation activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021304007,សកម្មភាពឧទ្យានកម្សាន្តនិងសួនកម្សាន្ត ,Activities of amusement parks and theme parks,021304,សកម្មភាពកីឡានិងសកម្មភាពកម្សាន្តនិងកំសាន្ត,Sports activities and amusement and recreation activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021304008,សកម្មភាពសួនកំសាន្តនិងឆ្នេរកំសាន្ត ,Activities of recreation parks and beaches,021304,សកម្មភាពកីឡានិងសកម្មភាពកម្សាន្តនិងកំសាន្ត,Sports activities and amusement and recreation activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021304009,សកម្មភាពកំសាន្ដនិងការកំសាន្តផ្សេងៗទៀត។ ,Any other amusement and recreation activities n.e.c.,021304,សកម្មភាពកីឡានិងសកម្មភាពកម្សាន្តនិងកំសាន្ត,Sports activities and amusement and recreation activities,0213,សិល្បៈការកំសាន្តនិងការកំសាន្ត ,"Arts, entertainment and recreation",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021401001,ការអប់រំមតេយ្យ ,Pre-primary education,021401,ការអប់រំបឋមនិងបឋម,Pre-primary and primary education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021401002,បឋមសិក្សា ,Primary education,021401,ការអប់រំបឋមនិងបឋម,Pre-primary and primary education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021402003,មធ្យមសិក្សាបឋមភូមិ,Lower secondary education,021402,អនុវិទ្យាល័យ,Secondary education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021402004,មធ្យមសិក្សាទុតិយភូមិ,Upper secondary education,021402,អនុវិទ្យាល័យ,Secondary education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021402005,ការអប់រំបច្ចេកទេសនិងវិជ្ជាជីវៈទាបជាងកម្រិតឧត្តមសិក្សា ,Technical and vocational education below the level of higher education,021402,អនុវិទ្យាល័យ,Secondary education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021403006,ការអប់រំនៅមហាវិទ្យាល័យនិងសាកលវិទ្យាល័យ សាធារណៈ ,College and university education Public,021403,ការសិក្សា​ខ្ពស់,Higher education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021403007,ការអប់រំនៅមហាវិទ្យាល័យនិងសាកលវិទ្យាល័យ ឯកជន ,College and university education Private,021403,ការសិក្សា​ខ្ពស់,Higher education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021404008,ការអប់រំអំពីកីឡានិងការកំសាន្ត ,Sports & Recreation Education,021404,ការអប់រំផ្សេងៗ,Other education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021404009,សាលាតន្ត្រីនិងរបាំនិងការអប់រំវប្បធម៌ដទៃទៀត ,School of Music & Dance & Other Cultural Education,021404,ការអប់រំផ្សេងៗ,Other education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021404010,មជ្ឈមណ្ឌលបណ្តុះបណ្តាល ,Training Center,021404,ការអប់រំផ្សេងៗ,Other education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021404011,បើកបរសាលា ,Driving School,021404,ការអប់រំផ្សេងៗ,Other education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021404012,ការណែនាំខាងសាសនា ,Religious guidance,021404,ការអប់រំផ្សេងៗ,Other education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021404013,បណ្តុះបណ្តាលកុំព្យូទ័រ ,Computer Training,021404,ការអប់រំផ្សេងៗ,Other education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021404014,ការបណ្តុះបណ្តាលវិជ្ជាជីវៈនិងបច្ចេកទេសផ្សេងទៀតដែលមិនមានកម្រិត ,Unrestricted vocational and other technical training,021404,ការអប់រំផ្សេងៗ,Other education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021404015,ការអប់រំផ្សេងទៀត n.e.c ,Other education n.e.c,021404,ការអប់រំផ្សេងៗ,Other education,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021405016,សេវាកម្មគាំទ្រការអប់រំ ,Education Support Services,021405,សេវាកម្មគាំទ្រការអប់រំ,Educational support services,0214,ការអប់រំនិងបណ្តុះបណ្តាល ,Education and Training,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501001,សកម្មភាពមន្ទីរពេទ្យ ,Hospital activities,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501002,សេវាកម្មផ្ទះសម្ភព ខាងក្នុងឬខាងក្រៅមន្ទីរពេទ្យ ,Maternity home services inside or outside hospital,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501003,គ្លីនិកនិងសេវាវេជ្ជសាស្ត្រទូទៅ ,Clinics & Services General Medical,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501004,សេវាកម្មវេជ្ជសាស្ត្រជំនាញ ,Specialized Medical Services,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501005,សេវាកម្មធ្មេញ ,Dental Services,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501006,មន្ទីរពិសោធន៍វេជ្ជសាស្រ្ត ,Medical Laboratory,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501007,ការអនុវត្តឆ្មប ,Midwifery practice,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501008,សេវាកម្មព្យាបាលដោយចលនានិងព្យាបាលដោយចលនា ,Physiotherapy & Physiotherapy Services,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501009,សេវាកម្មចាក់ម្ជុលវិទ្យាសាស្ត្រ ,Scientific Acupuncture Services,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501010,សេវាកម្ម Herbalist ,Herbalist Services,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021501011,សេវាវេជ្ជសាស្រ្តផ្សេងទៀត។ ,Other medical services.,021501,សកម្មភាពសុខភាពមនុស្ស,Human health activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021502001,កន្លែងថែទាំមណ្ឌលថែទាំ ,Care Center Care Center,021502,សកម្មភាពថែទាំលំនៅដ្ឋាន,Residential care activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021502002,មជ្ឈមណ្ឌលស្តារនីតិសម្បទាគ្រឿងញៀន ,Drug Rehabilitation Center,021502,សកម្មភាពថែទាំលំនៅដ្ឋាន,Residential care activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021502003,សកម្មភាពថែទាំកន្លែងស្នាក់នៅផ្សេងទៀតសម្រាប់ការវិវត្តទៅជាវិកលចរិត។ ,Other accommodation care activities for the development of schizophrenia.,021502,សកម្មភាពថែទាំលំនៅដ្ឋាន,Residential care activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021502004,សកម្មភាពថែទាំលំនៅដ្ឋានសម្រាប់មនុស្សចាស់និងជនពិការ ,Home care activities for the elderly and the disabled,021502,សកម្មភាពថែទាំលំនៅដ្ឋាន,Residential care activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021502005,ការថែរក្សាលំនៅដ្ឋានសម្រាប់កុមារ រួមទាំងមណ្ឌលកុមារកំព្រា ,"Residential care for children, includes orphanages",021502,សកម្មភាពថែទាំលំនៅដ្ឋាន,Residential care activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021502006,ការថែទាំលំនៅដ្ឋានសម្រាប់មនុស្សពេញវ័យដែលមិនមែនជាមនុស្សចាស់និងក៏ជាជនពិការ ,Home care for adults who are not elderly or also disabled,021502,សកម្មភាពថែទាំលំនៅដ្ឋាន,Residential care activities,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021503001,សកម្មភាពការងារសង្គមដោយគ្មានកន្លែងស្នាក់នៅសម្រាប់មនុស្សចាស់និងជនពិការ អនុវត្តដោយការិយាល័យរដ្ឋាភិបាលឬដោយអង្គការឯកជន ,"Social work activities without accommodation for the elderly and disabled, carried out by government offices or by private organizations",021503,សកម្មភាពការងារសង្គមដោយគ្មានកន្លែងស្នាក់នៅ,Social work activities without accommodation,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021503002,សេវាកម្មប្រឹក្សា ,Consulting Services,021503,សកម្មភាពការងារសង្គមដោយគ្មានកន្លែងស្នាក់នៅ,Social work activities without accommodation,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021503003,សកម្មភាពថែទាំកុមារពេលថ្ងៃ ,Daytime childcare activities,021503,សកម្មភាពការងារសង្គមដោយគ្មានកន្លែងស្នាក់នៅ,Social work activities without accommodation,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021503004,សកម្មភាពការងារសង្គមផ្សេងទៀតដោយគ្មានកន្លែងស្នាក់នៅ។ ល។ ,Other social work activities without accommodation. Etc.,021503,សកម្មភាពការងារសង្គមដោយគ្មានកន្លែងស្នាក់នៅ,Social work activities without accommodation,0215,សកម្មភាពសុខភាពមនុស្សនិងការងារសង្គម ,Human health and social work activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021601001,សកម្មភាពគ្រួសារជានិយោជិតរបស់បុគ្គលិកធ្វើការតាមផ្ទះ,Family activities of domestic workers,021601,សកម្មភាពគ្រួសារជានិយោជកបុគ្គលិកក្នុងស្រុក,Activities of households as employers of domestic personnel,0216,សកម្មភាពរបស់គ្រួសារជានិយោជិក ទំនិញនិងសេវាកម្មដែលមានលក្ខណៈពិសេសដែលមិនធ្លាប់មានពីមុនមកនៃការផលិតផ្ទះសម្រាប់ប្រើប្រាស់ផ្ទាល់ខ្លួន,Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021602001,"សកម្មភាពផលិតទំនិញដែលមិនអាចញែកដាច់ពីគ្នារបស់គ្រួសារឯកជនសម្រាប់ប្រើប្រាស់ផ្ទាល់ខ្លួន",Undifferentiated goods-producing activities of private households for own use,021602,ទំនិញដែលមិនមានការចាប់អារម្មណ៍ - និងសេវាកម្ម - សកម្មភាពផលិតរបស់គ្រួសារឯកជនសម្រាប់ការប្រើប្រាស់ផ្ទាល់ខ្លួន ,Undifferentiated goods- and services- producing activities of private households for own use,0216,សកម្មភាពរបស់គ្រួសារជានិយោជិក ទំនិញនិងសេវាកម្មដែលមានលក្ខណៈពិសេសដែលមិនធ្លាប់មានពីមុនមកនៃការផលិតផ្ទះសម្រាប់ប្រើប្រាស់ផ្ទាល់ខ្លួន,Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021602002,"សកម្មភាពផ្គត់ផ្គង់សេវាកម្មដែលមិនអាចញែកដាច់ពីគ្នារបស់គ្រួសារឯកជនសម្រាប់ប្រើប្រាស់ផ្ទាល់ខ្លួន",Undifferentiated service-producing activities of private households for own use,021602,ទំនិញដែលមិនមានការចាប់អារម្មណ៍ - និងសេវាកម្ម - សកម្មភាពផលិតរបស់គ្រួសារឯកជនសម្រាប់ការប្រើប្រាស់ផ្ទាល់ខ្លួន ,Undifferentiated goods- and services- producing activities of private households for own use,0216,សកម្មភាពរបស់គ្រួសារជានិយោជិក ទំនិញនិងសេវាកម្មដែលមានលក្ខណៈពិសេសដែលមិនធ្លាប់មានពីមុនមកនៃការផលិតផ្ទះសម្រាប់ប្រើប្រាស់ផ្ទាល់ខ្លួន,Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021701001,សកម្មភាពច្បាប់,Legal action,021701,សកម្មភាពច្បាប់និងគណនេយ្យ,Legal and accounting activities,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021701002,គណនេយ្យគណនេយ្យនិងសវនកម្ម ទីប្រឹក្សាពន្ធ,"Accounting, Accounting and Auditing Tax Consultants",021701,សកម្មភាពច្បាប់និងគណនេយ្យ,Legal and accounting activities,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021702001,សកម្មភាពការិយាល័យកណ្តាល,Head Office Activities,021702,សកម្មភាពរបស់ការិយាល័យកណ្តាល; សកម្មភាពប្រឹក្សាយោបល់គ្រប់គ្រង,Activities of head offices; management consultancy activities,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021702002,សកម្មភាពប្រឹក្សាយោបល់គ្រប់គ្រង,Management consulting activities,021702,សកម្មភាពរបស់ការិយាល័យកណ្តាល; សកម្មភាពប្រឹក្សាយោបល់គ្រប់គ្រង,Activities of head offices; management consultancy activities,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021703001,សេវាកម្មស្ថាបត្យកម្ម,Architectural Services,021703,សកម្មភាពស្ថាបត្យកម្មនិងវិស្វកម្ម; ការធ្វើតេស្តនិងការវិភាគបច្ចេកទេស,Architectural and engineering activities; technical testing and analysis,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021703002,សេវាកម្មវិស្វកម្មនិងប្រឹក្សាបច្ចេកទេសផ្សេងទៀត,Other engineering and technical consulting services,021703,សកម្មភាពស្ថាបត្យកម្មនិងវិស្វកម្ម; ការធ្វើតេស្តនិងការវិភាគបច្ចេកទេស,Architectural and engineering activities; technical testing and analysis,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021703003,ការធ្វើតេស្តនិងការវិភាគបច្ចេកទេស,Technical testing and analysis,021703,សកម្មភាពស្ថាបត្យកម្មនិងវិស្វកម្ម; ការធ្វើតេស្តនិងការវិភាគបច្ចេកទេស,Architectural and engineering activities; technical testing and analysis,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021704001,ស្រាវជ្រាវនិងអភិវឌ្ឍន៏ពិសោធន៍វិទ្យាសាស្ត្រធម្មជាតិនិងវិស្វកម្ម,Research and development of natural science and engineering experiments,021704,ការស្រាវជ្រាវនិងការអភិវឌ្ឍន៍វិទ្យាសាស្ត្រ,Scientific research and development,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021704002,ស្រាវជ្រាវនិងអភិវឌ្ឍន៏ពិសោធន៍វិទ្យាសាស្ត្រសង្គមនិងមនុស្សសាស្ត្រ,Research and development of social sciences and humanities experiments,021704,ការស្រាវជ្រាវនិងការអភិវឌ្ឍន៍វិទ្យាសាស្ត្រ,Scientific research and development,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021705001,ផ្សាយពាណិជ្ជកម្ម,Advertising,021705,ការផ្សព្វផ្សាយនិងការស្រាវជ្រាវទីផ្សារ,Advertising and market research,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021705002,ការស្រាវជ្រាវទីផ្សារនិងការស្ទង់មតិសាធារណៈ,Market research and public opinion polls,021705,ការផ្សព្វផ្សាយនិងការស្រាវជ្រាវទីផ្សារ,Advertising and market research,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021706001,សកម្មភាពរចនាឯកទេស,Specialized design activities,021706,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេសផ្សេងទៀត,"Other professional, scientific and technical activities",0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021706002,សកម្មភាពថតរូប,Photography activities,021706,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេសផ្សេងទៀត,"Other professional, scientific and technical activities",0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021706003,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេសផ្សេងទៀត។,"Other professional, scientific and technical activities.",021706,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេសផ្សេងទៀត,"Other professional, scientific and technical activities",0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021707001,សកម្មភាពពេទ្យសត្វ,Veterinary activities,021707,សកម្មភាពពេទ្យសត្វ,Veterinary activities,0217,សកម្មភាពវិជ្ជាជីវៈវិទ្យាសាស្ត្រនិងបច្ចេកទេស ,"Professional, Scientific and Technical Activities",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021801001,សកម្មភាពរដ្ឋបាលទូទៅ ទូទៅ,"General ,overall public administration activities",021801,រដ្ឋបាលរដ្ឋនិងគោលនយោបាយសេដ្ឋកិច្ចនិងសង្គមរបស់សហគមន៍,Administration of the State and the economic and social policy of the community,0218,រដ្ឋបាលសាធារណៈនិងការពារជាតិ; សន្តិសុខសង្គមជាកាតព្វកិច្ច ,"Public Administration, National Defense, and Compulsory Social Security",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021801002,រដ្ឋបាលរបស់រដ្ឋាភិបាលនៃកម្មវិធីសេដ្ឋកិច្ចនិងសង្គម,Government administration of economic and social programs,021801,រដ្ឋបាលរដ្ឋនិងគោលនយោបាយសេដ្ឋកិច្ចនិងសង្គមរបស់សហគមន៍,Administration of the State and the economic and social policy of the community,0218,រដ្ឋបាលសាធារណៈនិងការពារជាតិ; សន្តិសុខសង្គមជាកាតព្វកិច្ច ,"Public Administration, National Defense, and Compulsory Social Security",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021801003,បទប្បញ្ញត្តិនិងការចូលរួមចំណែកក្នុងប្រតិបត្តិការអាជីវកម្មកាន់តែមានប្រសិទ្ធភាព,Regulation of and contribution to more efficient operation of businesses,021801,រដ្ឋបាលរដ្ឋនិងគោលនយោបាយសេដ្ឋកិច្ចនិងសង្គមរបស់សហគមន៍,Administration of the State and the economic and social policy of the community,0218,រដ្ឋបាលសាធារណៈនិងការពារជាតិ; សន្តិសុខសង្គមជាកាតព្វកិច្ច ,"Public Administration, National Defense, and Compulsory Social Security",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021802004,កិច្ចការបរទេស,Foreign affairs,021802,ការផ្តល់សេវាកម្មដល់សហគមន៍ទាំងមូល,Provision of services to the community as a whole,0218,រដ្ឋបាលសាធារណៈនិងការពារជាតិ; សន្តិសុខសង្គមជាកាតព្វកិច្ច ,"Public Administration, National Defense, and Compulsory Social Security",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021802005,សេវាកម្មការពារយោធានិងស៊ីវិល,Military and civil defence services,021802,ការផ្តល់សេវាកម្មដល់សហគមន៍ទាំងមូល,Provision of services to the community as a whole,0218,រដ្ឋបាលសាធារណៈនិងការពារជាតិ; សន្តិសុខសង្គមជាកាតព្វកិច្ច ,"Public Administration, National Defense, and Compulsory Social Security",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021802006,សេវាកម្មប៉ូលីស,Police service,021802,ការផ្តល់សេវាកម្មដល់សហគមន៍ទាំងមូល,Provision of services to the community as a whole,0218,រដ្ឋបាលសាធារណៈនិងការពារជាតិ; សន្តិសុខសង្គមជាកាតព្វកិច្ច ,"Public Administration, National Defense, and Compulsory Social Security",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021802007,តុលាការច្បាប់,Law courts,021802,ការផ្តល់សេវាកម្មដល់សហគមន៍ទាំងមូល,Provision of services to the community as a whole,0218,រដ្ឋបាលសាធារណៈនិងការពារជាតិ; សន្តិសុខសង្គមជាកាតព្វកិច្ច ,"Public Administration, National Defense, and Compulsory Social Security",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021802008,សេវាកម្មទាក់ទងនឹងសណ្តាប់ធ្នាប់និងសុវត្ថិភាពសាធារណៈដទៃទៀត,Other public order and safety affairs related services,021802,ការផ្តល់សេវាកម្មដល់សហគមន៍ទាំងមូល,Provision of services to the community as a whole,0218,រដ្ឋបាលសាធារណៈនិងការពារជាតិ; សន្តិសុខសង្គមជាកាតព្វកិច្ច ,"Public Administration, National Defense, and Compulsory Social Security",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021803009,សកម្មភាពសន្តិសុខសង្គមជាកាតព្វកិច្ច,Compulsory social security activities,021803,សកម្មភាពសន្តិសុខសង្គមជាកាតព្វកិច្ច,Compulsory social security activities,0218,រដ្ឋបាលសាធារណៈនិងការពារជាតិ; សន្តិសុខសង្គមជាកាតព្វកិច្ច ,"Public Administration, National Defense, and Compulsory Social Security",02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021901001,សកម្មភាពអាជីវកម្មនិងអង្គការសមាជិកភាពរបស់និយោជិក,Business activities and organization of employee membership,021901,សកម្មភាពរបស់អង្គការសមាជិកភាព,Activities of membership organizations,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021901002,សកម្មភាពរបស់អង្គការសមាជិកភាពអាជីព,Activities of Professional Membership Organization,021901,សកម្មភាពរបស់អង្គការសមាជិកភាព,Activities of membership organizations,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021901003,សកម្មភាពរបស់សហជីព,Union activities,021901,សកម្មភាពរបស់អង្គការសមាជិកភាព,Activities of membership organizations,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021901004,សកម្មភាពរបស់អង្គការសាសនា,Activities of religious organizations,021901,សកម្មភាពរបស់អង្គការសមាជិកភាព,Activities of membership organizations,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021901005,សកម្មភាពរបស់អង្គការនយោបាយ,Activities of political organizations,021901,សកម្មភាពរបស់អង្គការសមាជិកភាព,Activities of membership organizations,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021901006,សកម្មភាពរបស់អង្គការសមាជិកដទៃទៀត n.e.,Activities of other member organizations n.e.,021901,សកម្មភាពរបស់អង្គការសមាជិកភាព,Activities of membership organizations,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902001,ជួសជុលកុំព្យូទ័រនិងឧបករណ៍ទំនាក់ទំនង,Computer and communication equipment repair,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902002,ជួសជុលនិងថែទាំទូរស័ព្ទដៃ,Mobile phone repair and maintenance,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902003,ជួសជុលនិងថែទាំឧបករណ៍ទំនាក់ទំនង។ ល។,Repair and maintenance of communication equipment. Etc.,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902004,ជួសជុលនិងថែទាំឧបករណ៍វីដេអូនិងសំលេង,Repair and maintenance of video and audio equipment,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902005,ជួសជុលនិងថែទាំគ្រឿងអេឡិចត្រូនិកប្រើប្រាស់ផ្សេងៗ,Repair and maintenance of other consumer electronics,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902006,ជួសជុលនិងផ្តល់សេវាកម្មប្រើប្រាស់ក្នុងផ្ទះរួមទាំងឧបករណ៍សួន,"Repair and service of home appliances, including garden tools",021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902007,ជួសជុលស្បែកជើងនិងទំនិញស្បែកដូចជាស្បែកជើងកវែងស្បែកជើងកែងជើងឥវ៉ាន់និងរបស់ផ្សេងទៀត,"Repair shoes and leather goods such as boots, shoes, heels, luggage and other items",021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902008,ជួសជុលគ្រឿងសង្ហារិមនិងគ្រឿងសង្ហារឹមក្នុងផ្ទះ,Furniture & Home Improvement,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902009,ជួសជុលកង់,Bicycle Repair,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902010,ការកែសម្រួលសម្លៀកបំពាក់,Repairing and changing clothes,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902011,ជួសជុលនិងផ្លាស់ប្តូរគ្រឿងអលង្ការ,Jewelry Repair & Replacement,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021902012,ជួសជុលទំនិញផ្ទាល់ខ្លួននិងគ្រួសារផ្សេងទៀត។,Repair personal and other household goods.,021902,ជួសជុលកុំព្យូទ័រនិងទំនិញផ្ទាល់ខ្លួននិងគ្រួសារ,Repair of computers and personal and household goods,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021903001,"ការបោកសម្អាតសម្លៀកបំពាក់ និងបោកអ៊ុតស្ងួតរហ័ស។ល។","Laundering and dry-cleaning for clothes, pressing, etc.",021903,សកម្មភាពសេវាកម្មផ្ទាល់ខ្លួនផ្សេងទៀត,Other personal service activities,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021903002,"ការបោកគក់និងសម្អាតផលិតផលវាយនភ័ណ្ឌ ដែលពុំបានរាប់បញ្ចូល","Washing and cleaning of textiles, n.e.c.",021903,សកម្មភាពសេវាកម្មផ្ទាល់ខ្លួនផ្សេងទៀត,Other personal service activities,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021903003,ការកាត់សក់និងការព្យាបាលសម្រស់ផ្សេងទៀត,Haircuts and other beauty treatments,021903,សកម្មភាពសេវាកម្មផ្ទាល់ខ្លួនផ្សេងទៀត,Other personal service activities,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021903004,ពិធីបុណ្យសពរបស់មនុស្ស ឬសត្វ សាកសពនិងសកម្មភាពពាក់ព័ន្ធ,"Funeral of human, or animal corpses and related activities",021903,សកម្មភាពសេវាកម្មផ្ទាល់ខ្លួនផ្សេងទៀត,Other personal service activities,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021903005,ម៉ាស្សាបាតជើងហាងម៉ាស្សា។ ល។,"Foot massage, massage shop. Etc.",021903,សកម្មភាពសេវាកម្មផ្ទាល់ខ្លួនផ្សេងទៀត,Other personal service activities,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021903006,សកម្មភាពរបស់ហោរាសាស្ដ្រនិងខាងវិញ្ញាណ,Astrological and spiritual activities,021903,សកម្មភាពសេវាកម្មផ្ទាល់ខ្លួនផ្សេងទៀត,Other personal service activities,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021903007,សកម្មភាពសង្គមដូចជាការិយាល័យអាពាហ៍ពិពាហ៍សេវាកម្មអមដំណើររឺសេវាកម្មណាត់ជួប,"Social activities such as wedding office, escort service or dating service",021903,សកម្មភាពសេវាកម្មផ្ទាល់ខ្លួនផ្សេងទៀត,Other personal service activities,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021903008,សេវាកម្មថែទាំសត្វចិញ្ចឹម,Pet care services,021903,សកម្មភាពសេវាកម្មផ្ទាល់ខ្លួនផ្សេងទៀត,Other personal service activities,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  021903009,សកម្មភាពសេវាកម្មផ្សេងៗទៀត,Other service activities,021903,សកម្មភាពសេវាកម្មផ្ទាល់ខ្លួនផ្សេងទៀត,Other personal service activities,0219,សកម្មភាពសេវាកម្មផ្សេងៗ ,Other Service Activities,02,វិស័យមិនមែន ហិរញ្ញវត្ថុ,None Financial
  030101001,សំភារៈប្រើប្រាស់ក្នុងគ្រួសារ,Family Consumtions Loan,030101,សំភារៈប្រើប្រាស់ក្នុងគ្រួសារ,Family Consumtions Loan,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030101002,ការទិញម៉ាស៊ីនបោកខោអាវ,Buy washing machine,030101,សំភារៈប្រើប្រាស់ក្នុងគ្រួសារ,Family Consumtions Loan,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030101003,ការទិញម៉ាស៊ីនត្រជាក់,Buy Air Conditioner,030101,សំភារៈប្រើប្រាស់ក្នុងគ្រួសារ,Family Consumtions Loan,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030101004,ការទិញទូរស្សន៍,Buy Television,030101,សំភារៈប្រើប្រាស់ក្នុងគ្រួសារ,Family Consumtions Loan,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030101005,ការទិញម៉ៃក្រុវេ,Buy microwave,030101,សំភារៈប្រើប្រាស់ក្នុងគ្រួសារ,Family Consumtions Loan,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030101006,ការទិញទូទឹកកក,Buy refrigerator,030101,សំភារៈប្រើប្រាស់ក្នុងគ្រួសារ,Family Consumtions Loan,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030102001,ការសិក្សារ,Education Loan,030102,ការសិក្សារ,Education Loan,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030103001,ការព្យាបាលជំងឺ,Medical Expenses,030103,ការព្យាបាលជំងឺ,Medical Expenses,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030104001,ការទិញទូរស័ព្ទ,Mobile Phone Loan,030104,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030104002,ការទីញកុំព្យូទ័រ,Computer Loan,030104,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030104003,ការទិញម៉ូតូ,Motor Loan,030104,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030104004,ការទិញឡាន,Car Loan,030104,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030104005,កម្ចីបុគ្គលិក,Staff Loan,030104,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030104006,កម្ចីសម្រាប់រៀបចំកម្មវិធី,Event Loan,030104,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030105001,ជុសជុលគេហដ្ឋាន,Home Improvement ,030105,ការកែរលម្អរគេហដ្ខាន,Home Improvement Loan,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030106001,មានការធានា (មិនរួមបញ្ចូល វត្ថុធានាជាផ្ទះដែលកំពុងជាប់បន្ទុកបង់រំលោះ),"Secured, Excuded Mortgafes to purchased owner-occupied Housing",030106,មានការធានា (មិនរួមបញ្ចូល វត្ថុធានាជាផ្ទះដែលកំពុងជាប់បន្ទុកបង់រំលោះ),"Secured, Excuded Mortgafes to purchased owner-occupied Housing",0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030107001,មិនមានការធានា,Unsecured,030107,មិនមានការធានា,Unsecured,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030108001,កម្ចីផ្សេងៗដែលមិនបានរៀបរាប់ខាងលើ,Other Consumptions,030108,ផ្សេងៗ,Other Consumptions,0301,ការប្រើប្រាស់ផ្ទាល់ខ្លួន,Personal Lending,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030201001,កាត​ឥណទានមានការធានា,Secured Credit Card,030201,កាត​ឥណទានមានការធានា,Secured Credit Card,0302,ការអោយខ្ចីតាមប័ណ្ណឥណទាន,Credit Cards,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030202001,កាតឥណទានមិនមានការធានា,Unsecured Credit Card,030202,កាតឥណទានមិនមានការធានា,Unsecured Credit Card,0302,ការអោយខ្ចីតាមប័ណ្ណឥណទាន,Credit Cards,03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030301001,កម្ចីទិញផ្ទះរយៈពេលខ្លីដែលមានរយៈពេលតិចជាង ៣ ឆ្នាំ,Bridge Finance For House Purchase,030301,កម្ចីទិញផ្ទះរយៈពេលខ្លីដែលមានរយៈពេលតិចជាង ៣ ឆ្នាំ,Bridge Finance For House Purchase,0303,ការអោយខ្ចីទិញផ្ទៈជាកម្មសិទ្ធិផ្ទាល់ខ្លួន,"Mortgages, Owner-Occupied Housing only",03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030302001,ប្រាក់កម្ចីទិញផ្ទះម្ចាស់ផ្ទះកាន់កាប់តែប៉ុណ្ណោះ,"Mortgages, Owner-Occupied Housing only",030302,ប្រាក់កម្ចីទិញផ្ទះម្ចាស់ផ្ទះកាន់កាប់តែប៉ុណ្ណោះ,"Mortgages, Owner-Occupied Housing only",0303,ការអោយខ្ចីទិញផ្ទៈជាកម្មសិទ្ធិផ្ទាល់ខ្លួន,"Mortgages, Owner-Occupied Housing only",03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  030303001,ការទិញផ្ទះផ្សេងទៀត,Other House Purchase,030303,ការទិញផ្ទះផ្សេងទៀត,Other House Purchase,0303,ការអោយខ្ចីទិញផ្ទៈជាកម្មសិទ្ធិផ្ទាល់ខ្លួន,"Mortgages, Owner-Occupied Housing only",03,តម្រូវការផ្ផាល់ខ្លួន,Personal Essentials
  
    `;
    var lines = csvString.trim().split('\n');
    lines = lines.map(line => line.replace(/,$/, ''));
    csvString = lines.join('\n');
    
    var rowsAsObjects2 = [];
    var rowsAsObjects4 = [];
    var rowsAsObjects6 = [];
    var rowsAsObjects = [];
    
    // Parse Non-Duplicates for 2 Digits (03)
    Papa.parse(csvString, { //Converting Objects to Objects in Array
        header: true,
        dynamicTyping: false,
        complete: function(results) {
            let uniqueRows = new Set(); // Create a Set to store unique rows
            results.data.forEach(function(row) {
                let uniqueKey = `${row["2 Digit"]}-${row["2 Name (KH)"]}-${row["2 Name (EN)"]}`; // Create a unique key for each row
                if (!uniqueRows.has(uniqueKey)) { // Only push the row if its unique key doesn't already exist in the Set
                    uniqueRows.add(uniqueKey);
                    rowsAsObjects2.push(row);
                }
            });    
            // Call createTableRows here, after rowsAsObjects has been populated
        }
    });

    // Parse Non-Duplicates for 4 Digits (25)
    Papa.parse(csvString, {
        header: true, dynamicTyping: false, complete: function(results){
            let uniqueRows = new Set();
            results.data.forEach(function(row) {
                let uniqueKey = `${row["2 Digit"]}-${row["2 Name (KH)"]}-${row["2 Name (EN)"]}-${row["4 Digit"]}-${row["4 Name (KH)"]}-${row["4 Name (EN)"]}`;
                if (!uniqueRows.has(uniqueKey)){
                    uniqueRows.add(uniqueKey);
                    rowsAsObjects4.push(row);
                }
            });
        }
    });
    // Parse Non-Duplicates for 6 Digits (116)
    Papa.parse(csvString, {
        header: true, dynamicTyping: false, complete: function(results){
            let uniqueRows = new Set();
            results.data.forEach(function(row) {
                let uniqueKey = `${row["2 Digit"]}-${row["2 Name (KH)"]}-${row["2 Name (EN)"]}-${row["4 Digit"]}-${row["4 Name (KH)"]}-${row["4 Name (EN)"]}-${row["6 Digit"]}-${row["6 Name (KH)"]}-${row["6 Name (EN)"]}`;
                if (!uniqueRows.has(uniqueKey)){
                    uniqueRows.add(uniqueKey);
                    rowsAsObjects6.push(row);
                }
            });
        }

    });
    // Parse Non-Duplicates for 9 Digits (1318)
    Papa.parse(csvString, {
        header: true, dynamicTyping: false, complete: function(results){
            let uniqueRows = new Set();
            results.data.forEach(function(row) {
                let uniqueKey = `${row["9 Digit (Prakas)"]}-${row["9 Name (KH)"]}-${row["9 Name (EN)"]}`;
                if (!uniqueRows.has(uniqueKey)){
                    uniqueRows.add(uniqueKey);
                    rowsAsObjects.push(row);
                }
            });
        }

    });
    function createCell(text, rowId, cellType) {
        let td = document.createElement('td');
        td.textContent = text; // Set the text directly on the td
        td.id = 'idRow' + rowId; // Add a unique id for each cell
        td.style.maxWidth = '300px';
        if (cellType === 'twoDigitsCell') {
            td.className = 'twoDigitsCell';
        }
        return td;
    }    
        let digits4with01 = []; 
        let objectToCompare = rowsAsObjects2[0];
        for (let i = 0; i < rowsAsObjects4.length; i++) {
            let currentObject = rowsAsObjects4[i];
            if (objectToCompare["2 Digit"] === currentObject["2 Digit"] &&
                objectToCompare["2 Name (KH)"] === currentObject["2 Name (KH)"] &&
                objectToCompare["2 Name (EN)"] === currentObject["2 Name (EN)"]) {
                digits4with01.push(currentObject);
            }
        }
        let digits4with02 = []; 
        let objectToCompare2 = rowsAsObjects2[1];
        for (let i = 0; i < rowsAsObjects4.length; i++) {
            let currentObject2 = rowsAsObjects4[i];
            if (objectToCompare2["2 Digit"] === currentObject2["2 Digit"] &&
                objectToCompare2["2 Name (KH)"] === currentObject2["2 Name (KH)"] &&
                objectToCompare2["2 Name (EN)"] === currentObject2["2 Name (EN)"]) {
                digits4with02.push(currentObject2);
            }
        }
        let digits4with03 = []; 
        for (let i = 0; i < rowsAsObjects4.length; i++) {
            let currentObject = rowsAsObjects4[i];
            let objectToCompare = rowsAsObjects2[2];
            if (objectToCompare["2 Digit"] === currentObject["2 Digit"] &&
                objectToCompare["2 Name (KH)"] === currentObject["2 Name (KH)"] &&
                objectToCompare["2 Name (EN)"] === currentObject["2 Name (EN)"]) {
                digits4with03.push(currentObject);
            }
        }
        // Match 4 Digits with 6 Digits
        for(let n = 0; n < 3; n++){
            window['digits6with010' + (n+1)] = [];
        }
        for(let n = 0; n < 9; n++){
            window['digits6with020' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects6.length; i++){
                let currentObject = rowsAsObjects6[i];
                let objectToCompare = digits4with02[n];
                if (objectToCompare["4 Digit"] === currentObject["4 Digit"] &&
                objectToCompare["4 Name (KH)"] === currentObject["4 Name (KH)"] &&
                objectToCompare["4 Name (EN)"] === currentObject["4 Name (EN)"]) {
                window['digits6with020' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 9; n < 19; n++){
            window['digits6with02' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects6.length; i++){
                let currentObject = rowsAsObjects6[i];
                let objectToCompare = digits4with02[n];
                if (objectToCompare && 
                    objectToCompare["4 Digit"] === currentObject["4 Digit"] &&
                    objectToCompare["4 Name (KH)"] === currentObject["4 Name (KH)"] &&
                    objectToCompare["4 Name (EN)"] === currentObject["4 Name (EN)"]) {
                    window['digits6with02' + (n+1)].push(currentObject);
                }
            }
        }        
        for(let n = 0; n < 3; n++){
            window['digits6with030' + (n+1)] = [];
        }
        for(let n = 0; n < 3; n++){
            for(let i = 0; i < rowsAsObjects6.length; i++){
                let currentObject = rowsAsObjects6[i];
                let objectToCompare = digits4with01[n];
                if (objectToCompare["2 Digit"] === currentObject["2 Digit"] &&
                objectToCompare["2 Name (KH)"] === currentObject["2 Name (KH)"] &&
                objectToCompare["2 Name (EN)"] === currentObject["2 Name (EN)"] &&
                objectToCompare["4 Digit"] === currentObject["4 Digit"] &&
                objectToCompare["4 Name (KH)"] === currentObject["4 Name (KH)"] &&
                objectToCompare["4 Name (EN)"] === currentObject["4 Name (EN)"]) {
                window['digits6with010' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 3; n++){
            for(let i = 0; i < rowsAsObjects6.length; i++){
                let currentObject = rowsAsObjects6[i];
                let objectToCompare = digits4with03[n];
                if (objectToCompare["2 Digit"] === currentObject["2 Digit"] &&
                objectToCompare["2 Name (KH)"] === currentObject["2 Name (KH)"] &&
                objectToCompare["2 Name (EN)"] === currentObject["2 Name (EN)"] &&
                objectToCompare["4 Digit"] === currentObject["4 Digit"] &&
                objectToCompare["4 Name (KH)"] === currentObject["4 Name (KH)"] &&
                objectToCompare["4 Name (EN)"] === currentObject["4 Name (EN)"]) {
                window['digits6with030' + (n+1)].push(currentObject);
            }
            }
        }
         // Match 9 Digits with 6 Digits (OBJ)
         //
         //
         //
         //
        for(let n = 0; n < 1; n++){
            window['digits9with01010' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0101[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"] &&
                objectToCompare["4 Digit"] === currentObject["4 Digit"] &&
                objectToCompare["4 Name (KH)"] === currentObject["4 Name (KH)"] &&
                objectToCompare["4 Name (EN)"] === currentObject["4 Name (EN)"]) {
                window['digits9with01010' + (n+1)].push(currentObject);
            }
            }
        }

        for(let n = 0; n < 3; n++){
            window['digits9with01020' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0102[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"] &&
                objectToCompare["4 Digit"] === currentObject["4 Digit"] &&
                objectToCompare["4 Name (KH)"] === currentObject["4 Name (KH)"] &&
                objectToCompare["4 Name (EN)"] === currentObject["4 Name (EN)"]) {
                window['digits9with01020' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 7; n++){
            window['digits9with01030' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0103[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with01030' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 3; n++){
            window['digits9with02010' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0201[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02010' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 4; n++){
            window['digits9with02020' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0202[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02020' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 9; n++){
            window['digits9with02030' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0203[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02030' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 9; n < 17; n++){
            window['digits9with0203' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0203[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with0203' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 4; n++){
            window['digits9with02040' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0204[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02040' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 8; n++){
            window['digits9with02050' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0205[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02050' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 3; n++){
            window['digits9with02060' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0206[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02060' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 1; n++){
            window['digits9with02070' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0207[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02070' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 2; n++){
            window['digits9with02080' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0208[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02080' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 5; n++){
            window['digits9with02090' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0209[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02090' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 6; n++){
            window['digits9with02100' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0210[n];
                if (objectToCompare && 
                    objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                    objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                    objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                    window['digits9with02100' + (n+1)].push(currentObject);
                }
            }
        }

        for(let n = 0; n < 6; n++){
            window['digits9with02110' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0211[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02110' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 6; n++){
            window['digits9with02120' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0210[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02120' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 4; n++){
            window['digits9with02130' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0213[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02130' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 5; n++){
            window['digits9with02140' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0214[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02140' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 3; n++){
            window['digits9with02150' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0215[n];
                if (objectToCompare && 
                objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02150' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 2; n++){
            window['digits9with02160' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0216[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02160' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 7; n++){
            window['digits9with02170' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0217[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02170' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 3; n++){
            window['digits9with02180' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0218[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02180' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 3; n++){
            window['digits9with02190' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0219[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with02190' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 8; n++){
            window['digits9with03010' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0301[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with03010' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 2; n++){
            window['digits9with03020' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0302[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with03020' + (n+1)].push(currentObject);
            }
            }
        }
        for(let n = 0; n < 3; n++){
            window['digits9with03030' + (n+1)] = [];
            for(let i = 0; i < rowsAsObjects.length; i++){
                let currentObject = rowsAsObjects[i];
                let objectToCompare = digits6with0303[n];
                if (objectToCompare["6 Digit"] === currentObject["6 Digit"] &&
                objectToCompare["6 Name (KH)"] === currentObject["6 Name (KH)"] &&
                objectToCompare["6 Name (EN)"] === currentObject["6 Name (EN)"]) {
                window['digits9with03030' + (n+1)].push(currentObject);
            }
            }
        }
    // CREATING SUB ITEMS
    //
    //
    //
    window['digits69'] = [digits9with010101,digits9with010201,digits9with010202,digits9with010203,digits9with010301, digits9with010302, digits9with010303, digits9with010304, digits9with010305, digits9with010306, digits9with010307 
        ,digits9with020101,digits9with020102,digits9with020103,digits9with020201,digits9with020202,digits9with020203,digits9with020204,digits9with020301,digits9with020302,digits9with020303,digits9with020304,digits9with020305,digits9with020306,digits9with020307,digits9with020308,digits9with020309,
        digits9with020310,digits9with020311,digits9with020312,digits9with020313,digits9with020314,digits9with020315,digits9with020316,digits9with020317,digits9with020401,digits9with020402,digits9with020403,digits9with020404,digits9with020501,digits9with020502,digits9with020503,digits9with020504,digits9with020505,digits9with020506,digits9with020507,digits9with020508,
        digits9with020601,digits9with020602,digits9with020603,digits9with020701,digits9with020801,digits9with020802,digits9with020901,digits9with020902,digits9with020903,digits9with020904,digits9with020905,digits9with021001,digits9with021002,digits9with021003,digits9with021004,digits9with021005,digits9with021006,
        digits9with021101,digits9with021102,digits9with021103,digits9with021104,digits9with021105,digits9with021106,digits9with021201,digits9with021202,digits9with021203,digits9with021204,digits9with021205,digits9with021206,digits9with021301,digits9with021302,digits9with021303,digits9with021304,digits9with021401,digits9with021402,digits9with021403,digits9with021404,digits9with021405,
        digits9with021501,digits9with021502,digits9with021503,digits9with021601,digits9with021602,digits9with021701,digits9with021702,digits9with021703,digits9with021704,digits9with021705,digits9with021706,digits9with021707,digits9with021801,digits9with021802,digits9with021803,digits9with021901,digits9with021902,digits9with021903,
        digits9with030101,digits9with030102,digits9with030103,digits9with030104,digits9with030105,digits9with030106,digits9with030107,digits9with030108,digits9with030201,digits9with030202,digits9with030301,digits9with030302,digits9with030303];
    for(let i = 0; i < rowsAsObjects6.length; i++){
        if(i < digits69.length){
            rowsAsObjects6[i]["(SUB) 9 Digits with Same 6"] = digits69[i];
        }
    }
    window['digits46'] = [digits6with0101,digits6with0102,digits6with0103,digits6with0201,digits6with0202,digits6with0203,digits6with0204,digits6with0205,digits6with0206,digits6with0207,digits6with0208,digits6with0209,digits6with0210,digits6with0211,digits6with0212,digits6with0213,digits6with0214,digits6with0215,digits6with0216,digits6with0217,digits6with0218,digits6with0219,digits6with0301,digits6with0302,digits6with0303];
    for(let i = 0; i < rowsAsObjects4.length; i++){
        if(i < digits46.length){
            rowsAsObjects4[i]["(SUB) 6 Digits with Same 4"] = digits46[i];
        }
    }

    window['digits24'] = [digits4with01,digits4with02,digits4with03];
    for(let i=0; i < rowsAsObjects2.length; i++){
        if(i < digits24.length){
            rowsAsObjects2[i]["(SUB) 4 Digits with Same 2"] = digits24[i];
        }
    }
    createTableRows();
    // Function to create table rows from the rowsAsObjects array
    function createTableRows() {
        let tbody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = ''; 
        let rowId = 1; 
        for (let item of rowsAsObjects2) {
            let tr = document.createElement('tr');
            tr.className = "headerRow";
            tr.id = 'mainRow' + rowId;
            tr.style.display = 'table-row';
            let td1 = createCell(item["2 Digit"], rowId, 'twoDigitsCell');
            tr.appendChild(td1);
            let td2 = createCell(item["2 Name (KH)"], rowId);
            tr.appendChild(td2);
            let td3 = createCell(item["2 Name (EN)"], rowId);
            tr.appendChild(td3);
            let td7 = createImageCell('assets/images/dropdown.png', rowId, 'subRow' + rowId, 'mainRow' + rowId);
            tr.appendChild(td7);
            tbody.appendChild(tr);
            let subRowId = 1;
            let subitems = item["(SUB) 4 Digits with Same 2"];            
            for (let subitem of subitems) {
                let trSub = document.createElement('tr');
                trSub.className = "subRow";
                trSub.style.display = 'none'; 
                trSub.id = 'subRow' + rowId + '_' + subRowId; 
                for (let prop in subitem) {
                    if (prop === "4 Digit" || prop === "4 Name (KH)" || prop === "4 Name (EN)") {
                        let tdSub = createCell(subitem[prop], rowId);
                        trSub.appendChild(tdSub);
                    }
                }
                let tdSubImage = createImageCell2('assets/images/dropdown.png', rowId, 'subSubRow' + rowId + '_' + subRowId, 'subRow' + rowId + '_' + subRowId); 
                trSub.appendChild(tdSubImage);
                tbody.appendChild(trSub);
                let subSubRowId = 1;
                let subitems2 = subitem["(SUB) 6 Digits with Same 4"];
                for (let subitem2 of subitems2) {
                    let trSubSub = document.createElement('tr');
                    trSubSub.className = "subRow2";
                    trSubSub.style.display = 'none';
                    trSubSub.id = 'subSubRow' + rowId + '_' + subRowId + '_' + subSubRowId; 
                    for (let prop in subitem2) {
                        if (prop === "6 Digit" || prop === "6 Name (KH)" || prop === "6 Name (EN)") {
                            let tdSubSub = createCell(subitem2[prop], rowId);
                            trSubSub.appendChild(tdSubSub);
                        }
                    }
                    let subSubSubRowId = 1;
                    let tdSubSubImage = createImageCell3('assets/images/dropdown.png', rowId, 'subSubSubRow' + rowId + '_' + subRowId + '_' + subSubRowId, 'subSubRow' + rowId + '_' + subRowId + '_' + subSubRowId); 
                    trSubSub.appendChild(tdSubSubImage);
                    tbody.appendChild(trSubSub);
                    let subitems3 = subitem2["(SUB) 9 Digits with Same 6"]; 
                    for (let subitem3 of subitems3) {
                        let trSubSubSub = document.createElement('tr');
                        trSubSubSub.className = "subRow3"; 
                        trSubSubSub.style.display = 'none';
                        trSubSubSub.id = 'subSubSubRow' + rowId + '_' + subRowId + '_' + subSubRowId + '_' + subSubSubRowId; 
                        for (let prop in subitem3) {
                            if (prop === "9 Digit (Prakas)" || prop === "9 Name (KH)" || prop === "9 Name (EN)") {
                                let tdSubSubSub = createCell(subitem3[prop], rowId);
                                trSubSubSub.appendChild(tdSubSubSub);
                            }
                        }
                        let tdSubSubSubImage = createImageCell4('assets/images/copy-icon.webp', rowId, 'subSubSubRow' + rowId + "_" + subRowId + "_" + subSubRowId + "_" + subSubSubRowId, subitem3);
                        trSubSubSub.appendChild(tdSubSubSubImage);
                        tbody.appendChild(trSubSubSub);
                        subSubSubRowId++;
                    }
                    subSubRowId++;
                }
                subRowId++;
            }
            rowId++;
        }
    }    
    let activeId = [];
    let activeRowId = [];
    
    function storeId(rowId){
        activeId.push(rowId);
    }
    
    function storeSubId(rowId){
        activeRowId.push(rowId);
    }    
    function toggleSubRows(rowId) {
        let subRows = document.querySelectorAll('[id^="' + rowId + '_"]');
        for (let subRow of subRows) {
            if (subRow.style.display === 'none') {
                subRow.style.display = 'table-row'; // Show the row
            }
        }
    }
    
    function hideRows(rowId) {
        let unhideRows = document.querySelectorAll('tr:not([id^="' + rowId + '_"])');
        for (let unhideRow of unhideRows) {
            if (unhideRow.style.display === 'table-row') {
                unhideRow.style.display = 'none';
            }
        }
    }
    function revertFunction() {
        //activeRowId takes from ControlledRowId WHICH are the current rows being shown.
        //activeId takes from activeCellId WHICH was the row that was clicked on.
        let mainRows = document.querySelectorAll('tr[id^="mainRow"]');
        let lastActiveRowId = activeRowId.length > 0 ? activeId[activeRowId.length - 1] : ""; 
        let lastLastActiveRowId = activeRowId.length > 1 ? activeId[activeRowId.length - 2] : "";
        if(activeId.length <= 0){
            for (let mainRow of mainRows) {
                if(mainRow.style.display === 'none'){
                    mainRow.style.display = 'table-row';
                }
            }
        } else {
            for (let mainRow of mainRows) {
                if(mainRow.style.display === 'none'){
                    mainRow.style.display = 'table-row';
                }
            }
        }
        for (let shownRowsId of activeRowId){
            let shownRows = document.querySelectorAll('[id^="' + shownRowsId + '_"]');
            for (let row of shownRows){
                if(row.style.display === 'table-row'){
                    row.style.display = 'none';
                } 
            }
        }
        let tableHead = document.querySelector('#dataTable thead tr'); // Select the table header row
        let headers = tableHead.querySelectorAll('th'); // Get all the headers
        // Loop through each header and change it
        for(let i = 0; i < (headers.length); i++) {
            headers[0].textContent = 'CBC Industry'; // Change the text of the header
            headers[i].style.backgroundColor = "darkBlue";
            headers[i].style.color = "white";
        }
    }    
    let revert = document.getElementById('revert');
    revert.onclick = function() {
        revertFunction();
    };
    function createImageCell(imageUrl, rowId, controlledRowId, activeCellId) {
        let td = document.createElement('td');
        td.style.textAlign = 'center'; // Center the content
        let btn = document.createElement('button');
        btn.style.border = 'none';
        btn.style.background = 'none';
        btn.style.display = 'block'; // Block level element
        btn.style.margin = 'auto'; // Center the block level element
        btn.title = 'Go to Sub-Industry';
        btn.onmousedown = function() { 
            storeId(activeCellId);
            storeSubId(controlledRowId);
            toggleSubRows(controlledRowId);
            hideRows(controlledRowId);
            let tableHead = document.querySelector('#dataTable thead tr'); // Select the table header row
            let headers = tableHead.querySelectorAll('th'); // Get all the headers
            // Loop through each header and change it
            for(let i = 0; i < (headers.length); i++) {
                headers[0].textContent = 'CBC Sub Industry'; // Change the text of the header
                headers[i].style.backgroundColor = "darkGreen";
                headers[i].style.color = "white";
            }
        };
        let img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image for row ' + rowId;
        img.style.width = '30px';
        img.style.height = '30px';
        img.id = 'imageId' + rowId;
        btn.appendChild(img);
        td.appendChild(btn);
        return td;
    }
    
    
    function createImageCell2(imageUrl, rowId, controlledRowId, activeCellId) {
        let td = document.createElement('td');
        td.style.textAlign = 'center'; // Center the content
        let btn = document.createElement('button');
        btn.style.border = 'none';
        btn.style.background = 'none';
        btn.style.display = 'block'; // Block level element
        btn.style.margin = 'auto'; // Center the block level element
        btn.title = 'Go to Sector';
        btn.onmousedown = function() { 
            storeId(activeCellId);
            storeSubId(controlledRowId);
            toggleSubRows(controlledRowId); 
            hideRows(controlledRowId);
            let tableHead = document.querySelector('#dataTable thead tr'); // Select the table header row
            let headers = tableHead.querySelectorAll('th'); // Get all the headers
            // Loop through each header and change it
            for(let i = 0; i < (headers.length); i++) {
                headers[0].textContent = 'CBC Sector'; // Change the text of the header
                headers[i].style.backgroundColor = "darkRed";
                headers[i].style.color = "white";
            }
        };
        let img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image for row ' + rowId;
        img.style.width = '26px';
        img.style.height = '26px';
        img.id = 'imageId' + rowId;
        btn.appendChild(img);
        td.appendChild(btn);
        return td;
    }
    function createImageCell3(imageUrl, rowId, controlledRowId, activeCellId) {
        let td = document.createElement('td');
        td.style.textAlign = 'center'; // Center the content
        let btn = document.createElement('button');
        btn.style.border = 'none';
        btn.style.background = 'none';
        btn.style.display = 'block'; // Block level element
        btn.style.margin = 'auto'; // Center the block level element
        btn.title = 'Go to Sub-Sector';
        btn.onmousedown = function() { 
            storeId(activeCellId);
            storeSubId(controlledRowId);
            toggleSubRows(controlledRowId); 
            hideRows(controlledRowId);
            let tableHead = document.querySelector('#dataTable thead tr'); // Select the table header row
            let headers = tableHead.querySelectorAll('th'); // Get all the headers
            // Loop through each header and change it
            for(let i = 0; i < (headers.length); i++) {
                headers[0].textContent = 'CBC Sub Sector'; // Change the text of the header
                headers[i].style.backgroundColor = "darkOrange";
                headers[i].style.color = "white";
            }
        };
        let img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image for row ' + rowId;
        img.style.width = '25px';
        img.style.height = '25px';
        img.id = 'imageId' + rowId;
        btn.appendChild(img);
        td.appendChild(btn);
        return td;
    }
    function createImageCell4(imageUrl, rowId, controlledRowId, itemToString) {
        let td = document.createElement('td');
        td.style.textAlign = 'center'; // Center the content
        let btn = document.createElement('button');
        btn.style.border = 'none';
        btn.style.background = 'none';
        btn.style.display = 'block'; // Block level element
        btn.style.margin = 'auto'; // Center the block level element
        btn.title = 'Copy';
        btn.onmousedown = function(){
            dataToString(itemToString);
        }
        let img = document.createElement('img');
        img.src = imageUrl;
        img.className = 'copy-img';
        img.alt = 'Image for row ' + rowId;
        img.style.width = '28px';
        img.style.height = '28px';
        img.id = 'imageId' + rowId;
        img.style.objectFit = 'cover';
        img.style.borderRadius = '0'; 
        btn.appendChild(img);
        td.appendChild(btn);
        return td;
    }
    function dataToString(itemToString){
        let text = "";
        let keys = Object.keys(itemToString); // Get the keys
        let newOrder = [9, 10, 11, 6, 7, 8, 3, 4, 5, 0, 1, 2]; // Define the new order
        for(let i = 0; i < newOrder.length; i++){
            let key = keys[newOrder[i]];
            if(itemToString.hasOwnProperty(key)) {
                text += itemToString[key] + "\n";
            }
        }
        copyToCb(text);
    }
    // Function to show the popup
    function showPopup(message) {
        var popup = document.getElementById('popup');
        var popupText = document.getElementById('popup-text');
        popupText.textContent = message; // Set the message
        popup.style.display = 'block'; // Show the popup
      }
      
      // Function to close the popup
      document.getElementById('close-btn').onclick = function() {
        var popup = document.getElementById('popup');
        popup.style.display = 'none'; // Hide the popup
      }
      
      // Modify the copyToCb function to use the showPopup
    function copyToCb(text){
        var textArea = document.createElement("textarea");
        document.body.appendChild(textArea);
        textArea.value = text;
        textArea.select(); // Select the text
      
        // Copy the text to the clipboard using the Clipboard API
        navigator.clipboard.writeText(textArea.value).then(function() {
          showPopup('Copying to clipboard was successful!'); // Use the showPopup function
          document.body.removeChild(textArea); // Remove the textarea from the document
        }, function(err) {
          showPopup('Could not copy text: ' + err); // Use the showPopup function
        });
      }
      
    
    
}    

