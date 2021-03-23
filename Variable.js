"use strict";

let elements = [];

// 出題範囲
const group = {
  // アルカリ金属
  "alkali_metal": [3, 11, 19, 37, 55, 87],
  // アルカリ土類金属
  "alkari_earch_metal": [4, 12, 20, 38, 56, 88],
  // ハロゲン
  "halogen": [9, 17, 35, 53, 85, 117],
  // 希ガス
  "rare_gas": [2, 10, 18, 36, 54, 86, 118],
  // 半導体
  "semiconductor":  [13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116],
  // 遷移金属　
  "transition_metal": [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    72, 73, 74, 75, 76, 77, 78, 79, 80, 104, 105, 106, 107, 108, 109, 110, 111, 112],
  // ラタノイド
  "lanthanoid": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
  // アクチノイド
  "actinide": [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103],
  // その他非金属
  "other": [1, 6, 7, 8, 15, 16, 34],
  // メタロイド
  "metalloid":  [5, 14, 32, 33, 51, 52, 84]
}

let startflg1 = true;
let startflg2 = true;

let num = 118;
let q_num = 1;
let a_num = 2;



