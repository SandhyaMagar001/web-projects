export function unsplash(id, width = 1800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const images = {
  hero: unsplash("photo-1544735716-392fe2489ffa"),
  boudha: unsplash("photo-1558799401-1dcba79834c2"),
  boudhaCity: unsplash("photo-1605640840605-14ac1855827b"),
  boudhaDusk: unsplash("photo-1611516491426-03025e6043c8"),
  everest: unsplash("photo-1751932140438-5916e27d0352"),
  highRange: unsplash("photo-1575819719798-83d97dd6949c"),
  snowWalk: unsplash("photo-1626621341517-bbf3d9990a23"),
  trekkers: unsplash("photo-1551632811-561732d1e306"),
  ridge: unsplash("photo-1526772662000-3f88f10405ff"),
  phewa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Phewa_Lake-Pokhara_05.jpg/1920px-Phewa_Lake-Pokhara_05.jpg",
  phewaSunset:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sun_Set_over_Phewa_Lake.jpg/1920px-Sun_Set_over_Phewa_Lake.jpg",
  annapurna:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Annapurna_South_and_Machapuchare_from_Ghandruk.jpg/1920px-Annapurna_South_and_Machapuchare_from_Ghandruk.jpg",
  abc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Between_Machapuchare_and_Annapurna_Basecamp.jpg/1920px-Between_Machapuchare_and_Annapurna_Basecamp.jpg",
  chitwanSafari:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Jungle_Safari_at_Chitwan_National_Park.jpg/1920px-Jungle_Safari_at_Chitwan_National_Park.jpg",
  chitwanJungle:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jungle_chitwan_national_park.jpg/1920px-Jungle_chitwan_national_park.jpg",
  rhino:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Great_one_horned_rhino_-_chitwan_national_park.jpg/1920px-Great_one_horned_rhino_-_chitwan_national_park.jpg",
  swayambhu:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Swayambhunath_2018.jpg/1920px-Swayambhunath_2018.jpg",
  namche:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Namche_Bazaar_from_Hotel_Everest_View_trail.jpg/1920px-Namche_Bazaar_from_Hotel_Everest_View_trail.jpg",
  everestNamche:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Namche_Bazaar-Ausblick-02-Nuptse-Everest-Lhotse-Ama_Dablam-2007-gje.jpg/1920px-Namche_Bazaar-Ausblick-02-Nuptse-Everest-Lhotse-Ama_Dablam-2007-gje.jpg",
};
