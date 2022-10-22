const JADWAL = [
    {
      jadwal_id: "01",
      bandara_kode_keberangkatan: "AA1",
      bandara_kode_tujuan: "AA2",
      maskapai_id: "AA",
      jadwal_keberangkatan: "22 Oktober 2022",
    },
    {
      jadwal_id: "02",
      bandara_kode_keberangkatan: "AA2",
      bandara_kode_tujuan: "AA1",
      maskapai_id: "GD",
      jadwal_keberangkatan: "22 Oktober 2022",
    },
    {
      jadwal_id: "03",
      bandara_kode_keberangkatan: "AA2",
      bandara_kode_tujuan: "AA3",
      maskapai_id: "BA",
      jadwal_keberangkatan: "22 Oktober 2022",
    },
    {
      jadwal_id: "04",
      bandara_kode_keberangkatan: "AA2",
      bandara_kode_tujuan: "AA4",
      maskapai_id: "LA",
      jadwal_keberangkatan: "22 Oktober 2022",
    },
    {
      jadwal_id: "05",
      bandara_kode_keberangkatan: "AA4",
      bandara_kode_tujuan: "AA3",
      maskapai_id: "BA",
      jadwal_keberangkatan: "22 Oktober 2022",
    },
  ];
  
  const MASKAPAI = [
    {
      maskapai_id: "GD",
      maskapai_nama: "Garuda",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "AA",
      maskapai_nama: "Air Asia",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "LA",
      maskapai_nama: "Lion air",
      maskapai_logo: " ",
    },
    {
      maskapai_id: "BA",
      maskapai_nama: "Batik air",
      maskapai_logo: " ",
    },
  ];
  
  const BANDARA = [
    {
      bandara_kode: "AA1",
      bandara_nama: "Soekarno Hatta",
    },
    {
      bandara_kode: "AA2",
      bandara_nama: 'Kualanamu',
    },
    {
      bandara_kode: "AA3",
      bandara_nama: "Raden Intan",
    },
    {
      bandara_kode: "AA4",
      bandara_nama: "Silangit",
    },
  ];
  export {JADWAL, MASKAPAI, BANDARA}