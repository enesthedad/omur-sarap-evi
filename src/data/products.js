const products = [
  {
    id: 1,
    wine: "Shiluh Mesopotamia Suryani Sarabi",
    grapeType: "Boğazkere",
    message:
      "Ben Boğazkere üzümü! Altı bin yıl önce Mezopotamya topraklarında doğdum. Atalarımdan Arami ve Asuriler güzel şaraplar yaptı. Onların Süryani torunları mirasımı sürdürüyor. Gılgameş kadar güçlüdür gövdem. Onun ölümsüzlük arayışına katılacak kadar uzun ömürlüyüm. Kiraz, karanfil ve okaliptus kokarım. Karadut, incir aromalarım, belirgin tanenlerim, uzun bitişim ve koyu yakut rengim mutluluk ve güven verir. Shiluh Mesopotamia siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilir ve siparişinizi kolaylıkla oluşturabilirsiniz.",
    volume: 750,
    percent: 14,
    acidity: 50,
    taste: 80,
    softness: 90,
  },

  {
    id: 2,
    wine: "Shiluh Manastır Süryani Şarabı",
    grapeType: "Boğazkere",
    message:
      "Shiluh'un en gözde şaraplarından. Oldukça koyu bordo renklidir. Damakta dolgun ve güçlü, diri asitlidir. Son derece dikkat çekici güçlü tanenlere tatlı siyah meyve aromaları eşlik ediyor. Ödüllü bir şarap çeşididir aynı zamanda. Shiluh Manastır Süryani Şarabı siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilirsiniz.",
    volume: 750,
    percent: 14,
    acidity: 50,
    taste: 80,
    softness: 90,
  },
  {
    id: 3,
    wine: "Shiluh Turabdin Süryani Şarabı",
    grapeType: "Boğazkere",
    message:
      "Shiluh'un en beğenilen ürünlerinden, Shiluh Turabdin Süryani Şarabı. Canlı ve parlak koyu bordo görünümlü, burunda toprak, mürdüm eriği, soğuk demli çay kokusu bırakır. Damakta da kırmızı meyve tatlarına vanilya eşlik ediyor. Güçlü ve kaliteli tanenleri, orta asiditesiyle son derece dikkat çekici. Aynı zamanda ödüllü de bir şarap çeşidi olan Shiluh Turabdin Süryani Şarabı siparişi vermek ve detaylı bilgi almak için whatsapp sipariş hattımızdan bize ulaşabilirsiniz.",
    volume: 750,
    percent: 13,
    acidity: 50,
    taste: 80,
    softness: 90,
  },
  {
    id: 4,
    wine: "Shiluh Mazrona Süryani Şarabı",
    grapeType: "Mazrona",
    message:
      "Shiluh Mazrona Süryani Şarabı son 100 yıldır sadece Midyat Bölgesi'nde yetişen Mazrona üzümünden monosepaj olarak üretilmekte. Açık renkli, yeşil elma ve narenciye aromaları ile diri ve yumuşak içimli bir şarap çeşididir. Balıklar, beyaz etler, deniz mahsulü salatalar ile uyum göstermekte. Soğuk servis edilmesi gereken Shiluh Mazrona'nın 12-15 derecede yatık olarak saklanması önerilir. Shiluh Mazrona Beyaz Süryani Şarabı siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilirsiniz.",
    volume: 750,
    percent: 14,
    acidity: 50,
    taste: 80,
    softness: 90,
  },
  {
    id: 5,
    wine: "Shiluh Dara Süryani Şarabı",
    grapeType: "Boğazkere - Öküzgözü",
    message:
      "Shiluh'un en özel şaraplarından ve aromalı tek şarap çeşidi aynı zamanda. Mahlepli süryani şarabı.. Mahlep aroması içeren Shiluh Dara Süryani Şarabı boğazkere ve öküzgözü üzümlerinden üretilmekte. Yoğun mahlep, tarçın ve karadut aromalarına tatlı baharatlar eşlik ediyor. Belirgin tanen ve orta asiditeye sahip bir şarap çeşidi olan Shiluh Dara Süryani Şarabı siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilirsiniz.",
    volume: 750,
    percent: 12.5,
    acidity: 50,
    taste: 80,
    softness: 90,
  },
  {
    id: 6,
    wine: "Shiluh Ninve Süryani Şarabı",
    grapeType: "Boğazkere - Öküzgözü",
    message:
      "Canlı ve bordo görünümlü, güçlü animal tonlar, vişne ve kuşburnu çağrışımları. Orta gövde ve yüksek asiditeye sahip, öküzgözü ağırlıklı bir kupaj. Alkol oranı %12.5 olan Shiluh Ninve Süryani Şarabı aynı zamanda ödüllü bir şarap çeşidimizdir. Shiluh ninve şarap siparişi vermek ve detaylı bilgi almak için whatsapp sipariş hattımızdan bize ulaşabilirsiniz.",
    volume: 750,
    percent: 12.5,
    acidity: 40,
    taste: 80,
    softness: 70,
  },
  {
    id: 7,
    wine: "Shiluh Ninve Süryani Şarabı",
    grapeType: "Öküzgözü",
    message:
      "Shiluh firmasına ait tek roze şarap çeşidi olan Shiluh verdo süryani şarabı, öküzgözü üzümlerinden üretilmekte. Burunda çiçeksi tonlar damakta kırmızı meyve aromaları ile ferahlatıcı uzun bitişli bir şaraptır. Diğer roze şaraplar gibi soğuk servis edilir. Shiluh verdo şarap siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilir, detaylı bilgi alabilirsiniz.",
    volume: 750,
    percent: 12.5,
    acidity: 40,
    taste: 70,
    softness: 60,
  },
  {
    id: 8,
    wine: "Shiluh Klasik Süryani Şarabı",
    grapeType: "Boğazkere - Öküzgözü",
    message:
      "Parlak yakut görünümlü. Burunda hafif yeşil biber çağrışımları, tam olgunlaşmamış böğürtlen. Yuvarlak tanenler ve orta asiditeye sahip. Shiluh klasik süryani şarabı ile ilgili detaylı bilgi ve fiyat bilgisine ulaşmak için whatsapp sipariş hattımızdan bize ulaşabilirsiniz.",
    volume: 750,
    percent: 12.5,
    acidity: 50,
    taste: 90,
    softness: 70,
  },
  {
    id: 9,
    wine: "Shiluh Kustan Süryani Şarabı",
    grapeType: "Mazrona - Kerküş",
    message:
      "Shiluh kustan beyaz süryani şarabı, Shiluh firmasına ait 2 beyaz şaraptan biri. Açık parlak sarı renge ve dolgun gövdeli bir içime sahip. Yanında ızgara balık, ızgara tavuk ve taze peynir ile tüketilebilir. Shiluh kustan beyaz süryani şarabı siparişi vermek ve detaylı bilgi almak için whatsapp sipariş hattımızdan bize ulaşabilirsiniz.",
    volume: 750,
    percent: 13,
    acidity: 30,
    taste: 80,
    softness: 95,
  },
  {
    id: 10,
    wine: "Shiluh Hamro Süryani Şarabı",
    grapeType: "Boğazkere - Öküzgözü",
    message:
      "Mardin ve çevresinde yetişen boğazkere ve öküzgözü üzümlerinin doğal fermantasyonuyla üretilmiştir. Parlak yakut görünümlü ve yuvarlak tanenli bir içime sahiptir. Alkol oranı %12.5 olan Shiluh Hamro Süryani Şarabı'nın yatık olarak saklanması önerilir. Shiluh hamro şarap siparişi vermek için whatsapp sipariş hattımızdan bize ulaşabilirsiniz.",
    volume: 750,
    percent: 12.5,
    acidity: 40,
    taste: 70,
    softness: 80,
  },
];
export default products;
