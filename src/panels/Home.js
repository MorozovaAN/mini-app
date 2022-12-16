import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item/Item';
import {
  Panel,
  FormLayout,
  FormItem,
  Button,
  Group,
  Search,
} from '@vkontakte/vkui';

const responce = [
  {
    album_id: 235090035,
    date: 1471966818,
    id: 427778093,
    owner_id: -71600914,
    sizes: [
      {
        height: 130,
        type: 'm',
        width: 84,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/Y0-zgSpcEO80TUoR_EW_-Sch4gtoRaYcFznnhxUIoWSOD8BAWlElB6dYIInM7yJ3ouL5S1J-.jpg?size=84x130&quality=96&type=album',
      },
      {
        height: 201,
        type: 'o',
        width: 130,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/ugBU8keTOlVdrxDT7B-JEAgsvSu-64qCwArA0EioAd8EQClOnzapd7VAwbpMRfldgQk-LljV.jpg?size=130x201&quality=96&type=album',
      },
      {
        height: 309,
        type: 'p',
        width: 200,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/OS1InWDQmhD8FohjCFcsDV_I-aqVJTPEBGLP1jo_GFc-R42PfKXNucjyybrqrR6Q-QLd3sim.jpg?size=200x309&quality=96&type=album',
      },
      {
        height: 495,
        type: 'q',
        width: 320,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/cZFBOijbCINQida0RPthy1_2ADrW86IXPbqTuBE813yIOWj3cYcyitS8TJFX--ZycXTsF7fl.jpg?size=320x495&quality=96&type=album',
      },
      {
        height: 789,
        type: 'r',
        width: 510,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/e7nSCCFaS6SnY7XddGFotqJHBDa5tzuCp_V4CmHPDTZTTkA6h7QEajdtJ6cggOD_CiKhTBJA.jpg?size=510x789&quality=96&type=album',
      },
      {
        height: 75,
        type: 's',
        width: 48,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/ybIQOOa5rJNmjbeu4D77y4jjoNNeXOyid4c5K6XKjJ2vzTIN6i5IVRLUy8z0dYYjDmO9-FNz.jpg?size=48x75&quality=96&type=album',
      },
      {
        height: 604,
        type: 'x',
        width: 390,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/A8LHjITgSkZtO1hDCGK4tTwfAS8lBOT0dhw3vwqZz_mQcwrHmIkFYpKw7HJw8osGODS7qqW9.jpg?size=390x604&quality=96&type=album',
      },
      {
        height: 807,
        type: 'y',
        width: 522,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/H1NCWYbVZy1GH-FECPmyHZPjFjd-CG8ezbYVzTUtTQolkuk1czIJfHQZvnKUIfRp6ZwxpNnr.jpg?size=522x807&quality=96&type=album',
      },
      {
        height: 1024,
        type: 'z',
        width: 662,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/-utEn23Al86BEVUlTstst5Yw1As06mEHG0CH5EpZSU8u7QnfgiDSmXkn87671gxbyUf4aGHb.jpg?size=662x1024&quality=96&type=album',
      },
    ],
    text: '',
    user_id: 100,
  },
  {
    album_id: 287898006,
    date: '2022-12-01 14:56:08',
    id: 457239017,
    owner_id: -217500787,
    sizes: [
      {
        height: 75,
        type: 's',
        width: 75,
        url: 'https://sun9-north.userapi.com/sun9-87/s/v1/ig2/CaCQeRZIiwaTtxLeEALAjz1rVwf9OC7Fk4yPENxU6Rc2udgQV8RZ7ePwdVyVHs_HrdLHGMIjOsfrdOCWH2dhySSv.jpg?size=75x75&quality=95&type=album',
      },
      {
        height: 130,
        type: 'm',
        width: 130,
        url: 'https://sun9-north.userapi.com/sun9-87/s/v1/ig2/REXvOrHGyRV8MlbCgBGxIl546fUE8VteO6mc68_bHvwdO6b3Fg61OCZPkFofCGyCrdQQ9XJf02rS79eUilrghqLR.jpg?size=130x130&quality=95&type=album',
      },
      {
        height: 528,
        type: 'x',
        width: 528,
        url: 'https://sun9-north.userapi.com/sun9-87/s/v1/ig2/7USqNwyiVw8ZLxdI8GVRIZtQ2sE5rFCxuBRWGQiSxGovlMIZ3dWSGDRZyAhuF6LWZHm92zdMaZOZaOZkMyEdzhNe.jpg?size=528x528&quality=95&type=album',
      },
      {
        height: 130,
        type: 'o',
        width: 130,
        url: 'https://sun9-north.userapi.com/sun9-87/s/v1/ig2/REXvOrHGyRV8MlbCgBGxIl546fUE8VteO6mc68_bHvwdO6b3Fg61OCZPkFofCGyCrdQQ9XJf02rS79eUilrghqLR.jpg?size=130x130&quality=95&type=album',
      },
      {
        height: 200,
        type: 'p',
        width: 200,
        url: 'https://sun9-north.userapi.com/sun9-87/s/v1/ig2/bZ_-xFkLxRD0SRmj8qSozDPmeaNNKWR23E9UIo2J9VQMapqTF7reXvAytN7nYjctZ0Jz-pqXoMbbkBjjOhSl6KHL.jpg?size=200x200&quality=95&type=album',
      },
      {
        height: 320,
        type: 'q',
        width: 320,
        url: 'https://sun9-north.userapi.com/sun9-87/s/v1/ig2/9UWZKEnuMhrR1-YdznGxH6ZDq2SZz-SSvZxzQOXNmTdSnzFMUOUWhrsCkmamEJXpXe1rXKvELznuk391VCExKTyT.jpg?size=320x320&quality=95&type=album',
      },
      {
        height: 510,
        type: 'r',
        width: 510,
        url: 'https://sun9-north.userapi.com/sun9-87/s/v1/ig2/M-hhqLiMv74fGEPEx-Mk-p43Ul26-gxha35ntKzKBRFVGtC9YovgE5b6CtHTV7UECL3x6hvKrkduyg3f3_OkIjts.jpg?size=510x510&quality=95&type=album',
      },
    ],
    text: '1фыва ффуа ыва',
    user_id: 100,
  },
  {
    album_id: 235090035,
    date: 1471966816,
    id: 427778088,
    owner_id: -71600914,
    sizes: [
      {
        height: 130,
        type: 'm',
        width: 95,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/bnnQBEykaVHlJqbqNV6Encl_78uhWW-GtP__QzEpLn1DVzwp7BQ0S0ZjyNLFF0TvKewEBLI9.jpg?size=95x130&quality=96&type=album',
      },
      {
        height: 177,
        type: 'o',
        width: 130,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/xwoHyvM9613mMK4VEFEBcKL9-BqnZo3NGIx1NcE9PbGz0wF_f__kf0Nbmt6VUzTcKLomXyKw.jpg?size=130x177&quality=96&type=album',
      },
      {
        height: 273,
        type: 'p',
        width: 200,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/jBrUsS71aQHRUZb-VHT4Vtx7Vfwql6zhDbG_OhGQrjLeUaE77RB4Bs79cacdBSD6DIRiPkTb.jpg?size=200x273&quality=96&type=album',
      },
      {
        height: 436,
        type: 'q',
        width: 320,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/bmQxUUHF64MnIijGdZn8LfM6fEoxLoqFhW6wD8OPdfv0grCl5YDAlI6j9Cj_L6d-NTrzgRHr.jpg?size=320x436&quality=96&type=album',
      },
      {
        height: 695,
        type: 'r',
        width: 510,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/TCuB_0YnVNNjWbllsjMX5_43WkiiB1oawxmlgzIk1MTUpHRQO6Ol1wBOJOGawXTKeBcx3MAU.jpg?size=510x695&quality=96&type=album',
      },
      {
        height: 75,
        type: 's',
        width: 55,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/jVWUVrirZ-bvnaSQ_LqveeeebaEkm1ZZlR14_k_TK31hHSeLQ5zFQ498m6hvmJRP9LJiyk61.jpg?size=55x75&quality=96&type=album',
      },
      {
        height: 604,
        type: 'x',
        width: 443,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/3WWSLQYJ90aEyOo25hV9funty6pS9LGPM3QG6dP-1JdVzS2k1QOy9YqPpCRicfzKwrDyH1Wr.jpg?size=443x604&quality=96&type=album',
      },
      {
        height: 736,
        type: 'y',
        width: 540,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/kjPY0ihkS7qV7QzZkuD5Le9Vn6e1eMWhniTRDZHOLbXDQhxRyo5510q9WmU1ikB7D1SpxnM8.jpg?size=540x736&quality=96&type=album',
      },
    ],
    text: '',
    user_id: 100,
  },
  {
    album_id: 287930074,
    date: '2022-12-01 14:56:41',
    id: 457239018,
    owner_id: -217500787,
    sizes: [
      {
        height: 37,
        type: 's',
        width: 75,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/mI_Hs0qWf8dJOYw5Dpp4RRoDTDcs4PFz4R46ksj0XooOvz5UjhmxU_exHvWvPKgmcuqIQCCK7fmjpYcJxdy8OMqN.jpg?size=75x37&quality=95&type=album',
      },
      {
        height: 65,
        type: 'm',
        width: 130,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/kn-NSYONLrXKuqMXkPS5ZEUX5lto6WtX1C5PFYl1AxZ1JdhTQUj7lNEE3qM9B8LoCM3PJeqd6BUeB8NianyQh9na.jpg?size=130x65&quality=95&type=album',
      },
      {
        height: 302,
        type: 'x',
        width: 604,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/UOH7wuFXpsAY9MfK2bhUUM_H6Aco9XN5wBfqzOstw5IbEr3BSRJPdGBy6o7XbldEyV2zCuaLZ7-JChFGJnS16DiX.jpg?size=604x302&quality=95&type=album',
      },
      {
        height: 403,
        type: 'y',
        width: 807,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/PCNQPv9bRZzL_H3-0FZD8qkyL9uSCGeUHWMHYz6igkIoz21goqWHRs1NdUPmzOgx0eUxDa8Sk2sR5OjllBfidZwF.jpg?size=807x403&quality=95&type=album',
      },
      {
        height: 600,
        type: 'z',
        width: 1200,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/liiT5zP3plQLCjtkR6FJ3jMM3ncxH0n4xU06dVCQZzgfKjKCNhsFozvPXE_D2RDZhs_eyi6IhiAVU2sVx-3KG4PG.jpg?size=1200x600&quality=95&type=album',
      },
      {
        height: 87,
        type: 'o',
        width: 130,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/62RrUzk21yTxzdLLF8zFSjukPo0RORcooxNydK7beGDhcgUgSSXoXBaf-uJegR97kzmCOJnE9lJ_kCO9ufvgG-OY.jpg?size=130x87&quality=95&crop=151,0,897,600&type=album',
      },
      {
        height: 133,
        type: 'p',
        width: 200,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/uumNFf__8WH9TQSgCjCO9CNPbwPanANpMxE20h-Zk3D-tYNQsvDclvs1cbN3a_BTSGZqi6go-ijn-NWq0GXoGpqV.jpg?size=200x133&quality=95&crop=149,0,902,600&type=album',
      },
      {
        height: 213,
        type: 'q',
        width: 320,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/OTMJaW6fsThAEUOZdIZjHD8Pa448_T6Hu9t4hMsorIidthqbaNUzNFouyi3H6u9spEdtB3eFdvYynPZw9Plnv0kk.jpg?size=320x213&quality=95&crop=149,0,901,600&type=album',
      },
      {
        height: 340,
        type: 'r',
        width: 510,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/ATuQtrCiCcNhGHegKr_dGT1jUneEn0PvD7CYQMzFNzKADgTHA9pBtCRfYDh0rN656E19easdiZ2p7TGbCaQwYkJL.jpg?size=510x340&quality=95&crop=150,0,900,600&type=album',
      },
    ],
    text: 'продается',
    user_id: 100,
  },
  {
    album_id: 287930074,
    date: '2022-12-12 17:07:36',
    id: 457239025,
    owner_id: -217500787,
    sizes: [
      {
        height: 37,
        type: 's',
        width: 75,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/mI_Hs0qWf8dJOYw5Dpp4RRoDTDcs4PFz4R46ksj0XooOvz5UjhmxU_exHvWvPKgmcuqIQCCK7fmjpYcJxdy8OMqN.jpg?size=75x37&quality=95&type=album',
      },
      {
        height: 65,
        type: 'm',
        width: 130,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/kn-NSYONLrXKuqMXkPS5ZEUX5lto6WtX1C5PFYl1AxZ1JdhTQUj7lNEE3qM9B8LoCM3PJeqd6BUeB8NianyQh9na.jpg?size=130x65&quality=95&type=album',
      },
      {
        height: 302,
        type: 'x',
        width: 604,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/UOH7wuFXpsAY9MfK2bhUUM_H6Aco9XN5wBfqzOstw5IbEr3BSRJPdGBy6o7XbldEyV2zCuaLZ7-JChFGJnS16DiX.jpg?size=604x302&quality=95&type=album',
      },
      {
        height: 403,
        type: 'y',
        width: 807,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/PCNQPv9bRZzL_H3-0FZD8qkyL9uSCGeUHWMHYz6igkIoz21goqWHRs1NdUPmzOgx0eUxDa8Sk2sR5OjllBfidZwF.jpg?size=807x403&quality=95&type=album',
      },
      {
        height: 600,
        type: 'z',
        width: 1200,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/liiT5zP3plQLCjtkR6FJ3jMM3ncxH0n4xU06dVCQZzgfKjKCNhsFozvPXE_D2RDZhs_eyi6IhiAVU2sVx-3KG4PG.jpg?size=1200x600&quality=95&type=album',
      },
      {
        height: 87,
        type: 'o',
        width: 130,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/62RrUzk21yTxzdLLF8zFSjukPo0RORcooxNydK7beGDhcgUgSSXoXBaf-uJegR97kzmCOJnE9lJ_kCO9ufvgG-OY.jpg?size=130x87&quality=95&crop=151,0,897,600&type=album',
      },
      {
        height: 133,
        type: 'p',
        width: 200,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/uumNFf__8WH9TQSgCjCO9CNPbwPanANpMxE20h-Zk3D-tYNQsvDclvs1cbN3a_BTSGZqi6go-ijn-NWq0GXoGpqV.jpg?size=200x133&quality=95&crop=149,0,902,600&type=album',
      },
      {
        height: 213,
        type: 'q',
        width: 320,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/OTMJaW6fsThAEUOZdIZjHD8Pa448_T6Hu9t4hMsorIidthqbaNUzNFouyi3H6u9spEdtB3eFdvYynPZw9Plnv0kk.jpg?size=320x213&quality=95&crop=149,0,901,600&type=album',
      },
      {
        height: 340,
        type: 'r',
        width: 510,
        url: 'https://sun9-north.userapi.com/sun9-81/s/v1/ig2/ATuQtrCiCcNhGHegKr_dGT1jUneEn0PvD7CYQMzFNzKADgTHA9pBtCRfYDh0rN656E19easdiZ2p7TGbCaQwYkJL.jpg?size=510x340&quality=95&crop=150,0,900,600&type=album',
      },
    ],
    text: '',
    user_id: 142690090,
  },
  {
    album_id: 235090035,
    date: 1471966817,
    id: 427778091,
    owner_id: -71600914,
    sizes: [
      {
        height: 130,
        type: 'm',
        width: 84,
        url: 'https://sun1.userapi.com/sun1-91/s/v1/if1/kV_w_mlCGJQo1AUVZIe2SSB7nvciYchHOdSpmpUXWIIXzyDxKi6lSz4JPeKKg_nCiHJHFSVC.jpg?size=84x130&quality=96&type=album',
      },
      {
        height: 201,
        type: 'o',
        width: 130,
        url: 'https://sun1.userapi.com/sun1-91/s/v1/if1/ggHv7NA3E-t9a1lLFqjFB7Jc__h4-uBvp5765Lep2wbFcTA_qVuzxoGdqelAjUwiGgC421IP.jpg?size=130x201&quality=96&type=album',
      },
      {
        height: 309,
        type: 'p',
        width: 200,
        url: 'https://sun1.userapi.com/sun1-91/s/v1/if1/eJLEdbFp-5aeCg7ldx0jDsJkGCOG0Waa-rTkE0nEumlpcNG2HSKulDwpXZ8N8of1NM8BtRdl.jpg?size=200x309&quality=96&type=album',
      },
      {
        height: 494,
        type: 'q',
        width: 320,
        url: 'https://sun1.userapi.com/sun1-91/s/v1/if1/bxP4qZOO7k4HDd1DVKDiqMcjRt54umKrLVtB6qmMKFhtKWbDslKfttA2JIeGqg9ATV-w57lz.jpg?size=320x494&quality=96&type=album',
      },
      {
        height: 788,
        type: 'r',
        width: 510,
        url: 'https://sun1.userapi.com/sun1-91/s/v1/if1/eP095YMZ6i3nWTZz6uTavm_Iz6SEViiLeVZnUP2ygAq7IUortOojDuqbjeRanZkI8EuD9S6i.jpg?size=510x788&quality=96&type=album',
      },
      {
        height: 75,
        type: 's',
        width: 49,
        url: 'https://sun1.userapi.com/sun1-91/s/v1/if1/bX0Cjx-MPxqPGmkMZkxyVERAg_1S_TvVOWKk5q2srBZX90A5dHgPCFRS_IQJPGsCqBtl8saI.jpg?size=49x75&quality=96&type=album',
      },
      {
        height: 604,
        type: 'x',
        width: 391,
        url: 'https://sun1.userapi.com/sun1-91/s/v1/if1/MeedAmpTWuomPdNo8R_OEeDHp9XuHCN7mR69D3RB03pSJP23f-nhVVINHXxXlXF9PhODBgX0.jpg?size=391x604&quality=96&type=album',
      },
      {
        height: 807,
        type: 'y',
        width: 523,
        url: 'https://sun1.userapi.com/sun1-91/s/v1/if1/_aWMy9xeEqo_PW47Kno4Eyd2DZzxSCQN-aoesc8hVSERDaXkWMm--yMqYi14FBPmfwnZCjZy.jpg?size=523x807&quality=96&type=album',
      },
      {
        height: 834,
        type: 'z',
        width: 540,
        url: 'https://sun1.userapi.com/sun1-91/s/v1/if1/VZd5UwGRSSJxgQDJfDBlnd1AHccxghIAgTRAs2bRL8zFSyKnMMWLTUnPrcMkCxX9LALJLA0J.jpg?size=540x834&quality=96&type=album',
      },
    ],
    text: '',
    user_id: 100,
  },
  {
    album_id: 235090035,
    date: 1471966818,
    id: 427778093,
    owner_id: -71600914,
    sizes: [
      {
        height: 130,
        type: 'm',
        width: 84,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/Y0-zgSpcEO80TUoR_EW_-Sch4gtoRaYcFznnhxUIoWSOD8BAWlElB6dYIInM7yJ3ouL5S1J-.jpg?size=84x130&quality=96&type=album',
      },
      {
        height: 201,
        type: 'o',
        width: 130,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/ugBU8keTOlVdrxDT7B-JEAgsvSu-64qCwArA0EioAd8EQClOnzapd7VAwbpMRfldgQk-LljV.jpg?size=130x201&quality=96&type=album',
      },
      {
        height: 309,
        type: 'p',
        width: 200,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/OS1InWDQmhD8FohjCFcsDV_I-aqVJTPEBGLP1jo_GFc-R42PfKXNucjyybrqrR6Q-QLd3sim.jpg?size=200x309&quality=96&type=album',
      },
      {
        height: 495,
        type: 'q',
        width: 320,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/cZFBOijbCINQida0RPthy1_2ADrW86IXPbqTuBE813yIOWj3cYcyitS8TJFX--ZycXTsF7fl.jpg?size=320x495&quality=96&type=album',
      },
      {
        height: 789,
        type: 'r',
        width: 510,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/e7nSCCFaS6SnY7XddGFotqJHBDa5tzuCp_V4CmHPDTZTTkA6h7QEajdtJ6cggOD_CiKhTBJA.jpg?size=510x789&quality=96&type=album',
      },
      {
        height: 75,
        type: 's',
        width: 48,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/ybIQOOa5rJNmjbeu4D77y4jjoNNeXOyid4c5K6XKjJ2vzTIN6i5IVRLUy8z0dYYjDmO9-FNz.jpg?size=48x75&quality=96&type=album',
      },
      {
        height: 604,
        type: 'x',
        width: 390,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/A8LHjITgSkZtO1hDCGK4tTwfAS8lBOT0dhw3vwqZz_mQcwrHmIkFYpKw7HJw8osGODS7qqW9.jpg?size=390x604&quality=96&type=album',
      },
      {
        height: 807,
        type: 'y',
        width: 522,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/H1NCWYbVZy1GH-FECPmyHZPjFjd-CG8ezbYVzTUtTQolkuk1czIJfHQZvnKUIfRp6ZwxpNnr.jpg?size=522x807&quality=96&type=album',
      },
      {
        height: 1024,
        type: 'z',
        width: 662,
        url: 'https://sun1.userapi.com/sun1-98/s/v1/if1/-utEn23Al86BEVUlTstst5Yw1As06mEHG0CH5EpZSU8u7QnfgiDSmXkn87671gxbyUf4aGHb.jpg?size=662x1024&quality=96&type=album',
      },
    ],
    text: '',
    user_id: 100,
  },
  {
    album_id: 235090035,
    date: 1471966820,
    id: 427778097,
    owner_id: -71600914,
    sizes: [
      {
        height: 130,
        type: 'm',
        width: 84,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/bTX6MBnMRErXpqVHlXPDkkny04XzuCvG2O9uDTjfFaw9Z0nZU0ar8nAoN7Tl5wRCDzm64Ntp.jpg?size=84x130&quality=96&type=album',
      },
      {
        height: 201,
        type: 'o',
        width: 130,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/z0ucco1jv4DFznJyjsC1Cks3JiMTFarH9DK8yOP7v_eJYL7Lt-mx0s--ZtD7grGyfkyaPip2.jpg?size=130x201&quality=96&type=album',
      },
      {
        height: 309,
        type: 'p',
        width: 200,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/YCcHqTQ-2GpqLkkUECL9scdThpQ8dmbeMvxbyGyRUbKzR9R4K96HHwfdeAx0bP64MBPNml0j.jpg?size=200x309&quality=96&type=album',
      },
      {
        height: 495,
        type: 'q',
        width: 320,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/k0yzyGxvxcY9P40L1WEN293WhsDuzkvuYeoaHLPEviawHv6lFcfOLYpwqi475UeaCSSC2J1k.jpg?size=320x495&quality=96&type=album',
      },
      {
        height: 789,
        type: 'r',
        width: 510,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/bMM6et7yMacbpK7XDozro7y1luME1IEa8fPR5h8lrDD6Z_wNQdzLec4Qg6lp7UjFGirFYoBD.jpg?size=510x789&quality=96&type=album',
      },
      {
        height: 75,
        type: 's',
        width: 48,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/v7L_JBC5vddTCCHJISiKv_-jHImq8178r2bZSJpB5X-0jdnw2kxmAIRIneCZU8ejgW0StI_7.jpg?size=48x75&quality=96&type=album',
      },
      {
        height: 604,
        type: 'x',
        width: 390,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/00cNCY29ux3lt6HR2cWlrVZUbZkfNAM3T0uq2gfwsvFacZroam3bmcxRXvN6RqSQUARFQWUx.jpg?size=390x604&quality=96&type=album',
      },
      {
        height: 807,
        type: 'y',
        width: 522,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/_CXIY8_pZTbSC9NMSUKOeG3mwBjDlNtc4UJDbnpGph9uFuEmdKG-pjJylp9LjSdEomb0kZX3.jpg?size=522x807&quality=96&type=album',
      },
      {
        height: 1024,
        type: 'z',
        width: 662,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/Sdz1jvykC9UH-AEdS3xdN0OmcOGrlxvltxiL_-ifNs-TDkVQZZC4p24jVA1seLP_8F73IZAB.jpg?size=662x1024&quality=96&type=album',
      },
    ],
    text: '',
    user_id: 100,
  },
  {
    album_id: 235090035,
    date: 1471966816,
    id: 427778088,
    owner_id: -71600914,
    sizes: [
      {
        height: 130,
        type: 'm',
        width: 95,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/bnnQBEykaVHlJqbqNV6Encl_78uhWW-GtP__QzEpLn1DVzwp7BQ0S0ZjyNLFF0TvKewEBLI9.jpg?size=95x130&quality=96&type=album',
      },
      {
        height: 177,
        type: 'o',
        width: 130,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/xwoHyvM9613mMK4VEFEBcKL9-BqnZo3NGIx1NcE9PbGz0wF_f__kf0Nbmt6VUzTcKLomXyKw.jpg?size=130x177&quality=96&type=album',
      },
      {
        height: 273,
        type: 'p',
        width: 200,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/jBrUsS71aQHRUZb-VHT4Vtx7Vfwql6zhDbG_OhGQrjLeUaE77RB4Bs79cacdBSD6DIRiPkTb.jpg?size=200x273&quality=96&type=album',
      },
      {
        height: 436,
        type: 'q',
        width: 320,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/bmQxUUHF64MnIijGdZn8LfM6fEoxLoqFhW6wD8OPdfv0grCl5YDAlI6j9Cj_L6d-NTrzgRHr.jpg?size=320x436&quality=96&type=album',
      },
      {
        height: 695,
        type: 'r',
        width: 510,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/TCuB_0YnVNNjWbllsjMX5_43WkiiB1oawxmlgzIk1MTUpHRQO6Ol1wBOJOGawXTKeBcx3MAU.jpg?size=510x695&quality=96&type=album',
      },
      {
        height: 75,
        type: 's',
        width: 55,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/jVWUVrirZ-bvnaSQ_LqveeeebaEkm1ZZlR14_k_TK31hHSeLQ5zFQ498m6hvmJRP9LJiyk61.jpg?size=55x75&quality=96&type=album',
      },
      {
        height: 604,
        type: 'x',
        width: 443,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/3WWSLQYJ90aEyOo25hV9funty6pS9LGPM3QG6dP-1JdVzS2k1QOy9YqPpCRicfzKwrDyH1Wr.jpg?size=443x604&quality=96&type=album',
      },
      {
        height: 736,
        type: 'y',
        width: 540,
        url: 'https://sun1.userapi.com/sun1-30/s/v1/if1/kjPY0ihkS7qV7QzZkuD5Le9Vn6e1eMWhniTRDZHOLbXDQhxRyo5510q9WmU1ikB7D1SpxnM8.jpg?size=540x736&quality=96&type=album',
      },
    ],
    text: '',
    user_id: 100,
  },
  {
    album_id: 235090035,
    date: 1471966820,
    id: 427778097,
    owner_id: -71600914,
    sizes: [
      {
        height: 130,
        type: 'm',
        width: 84,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/bTX6MBnMRErXpqVHlXPDkkny04XzuCvG2O9uDTjfFaw9Z0nZU0ar8nAoN7Tl5wRCDzm64Ntp.jpg?size=84x130&quality=96&type=album',
      },
      {
        height: 201,
        type: 'o',
        width: 130,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/z0ucco1jv4DFznJyjsC1Cks3JiMTFarH9DK8yOP7v_eJYL7Lt-mx0s--ZtD7grGyfkyaPip2.jpg?size=130x201&quality=96&type=album',
      },
      {
        height: 309,
        type: 'p',
        width: 200,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/YCcHqTQ-2GpqLkkUECL9scdThpQ8dmbeMvxbyGyRUbKzR9R4K96HHwfdeAx0bP64MBPNml0j.jpg?size=200x309&quality=96&type=album',
      },
      {
        height: 495,
        type: 'q',
        width: 320,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/k0yzyGxvxcY9P40L1WEN293WhsDuzkvuYeoaHLPEviawHv6lFcfOLYpwqi475UeaCSSC2J1k.jpg?size=320x495&quality=96&type=album',
      },
      {
        height: 789,
        type: 'r',
        width: 510,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/bMM6et7yMacbpK7XDozro7y1luME1IEa8fPR5h8lrDD6Z_wNQdzLec4Qg6lp7UjFGirFYoBD.jpg?size=510x789&quality=96&type=album',
      },
      {
        height: 75,
        type: 's',
        width: 48,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/v7L_JBC5vddTCCHJISiKv_-jHImq8178r2bZSJpB5X-0jdnw2kxmAIRIneCZU8ejgW0StI_7.jpg?size=48x75&quality=96&type=album',
      },
      {
        height: 604,
        type: 'x',
        width: 390,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/00cNCY29ux3lt6HR2cWlrVZUbZkfNAM3T0uq2gfwsvFacZroam3bmcxRXvN6RqSQUARFQWUx.jpg?size=390x604&quality=96&type=album',
      },
      {
        height: 807,
        type: 'y',
        width: 522,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/_CXIY8_pZTbSC9NMSUKOeG3mwBjDlNtc4UJDbnpGph9uFuEmdKG-pjJylp9LjSdEomb0kZX3.jpg?size=522x807&quality=96&type=album',
      },
      {
        height: 1024,
        type: 'z',
        width: 662,
        url: 'https://sun1.userapi.com/sun1-19/s/v1/if1/Sdz1jvykC9UH-AEdS3xdN0OmcOGrlxvltxiL_-ifNs-TDkVQZZC4p24jVA1seLP_8F73IZAB.jpg?size=662x1024&quality=96&type=album',
      },
    ],
    text: '',
    user_id: 100,
  },
];

const Home = ({ id, fetchedUser }) => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(null);

  const searchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const startSearch = (e) => {
    e.preventDefault();
    const find = searchValue.trim();
    if (find !== '') {
      fetch(
        `https://06c1-2a00-cc47-20b9-f600-fc1b-954f-57cf-8305.ngrok.io/search?search_query=${find}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Panel id={id}>
      <Group>
        <FormLayout onSubmit={startSearch}>
          <FormItem>
            <Search value={searchValue} onChange={searchChange} />
          </FormItem>
        </FormLayout>
        <Group>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              padding: '15px',
              minHeight: '70vh',
            }}
          >
            {data &&
              data.map((el) => {
                const link = `https://vk.com/photo${el.owner_id}_${el.id}`;
                const src = el.sizes.find((e) => e.type === 'm').url;

                return (
                  <Item imgIrc={src} text={el.text} link={link} key={el.id} />
                );
              })}
            {data && !data.length && (
              <p>
                По запросу <b>{searchValue}</b> ничего не найдено
              </p>
            )}
          </div>
        </Group>
      </Group>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
