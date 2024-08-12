import { authClientInstance } from "../utils/http-client";

// 옷 검색하는 함수 getSearchedClothes
export const getSearchedClothes = async (keyword) => {
  try {
    const response = await authClientInstance.get(`/api/clothes/search/${keyword}`)
    console.log("api res", response)
    return response;
  } catch (error) {
    console.error("API 요청 오류 (getSearchedClothes):", error);
    throw error;
  }
};

//옷 전체 조회하는 함수 getClothes
export const getClothes = async () => {
  const { data, status } = await authClientInstance.get('/clothes/');
  return { data, status };
};


//옷 삭제하는 함수
export const deleteClothes = async (clothesId) => {
  const { data, status } = await authClientInstance.delete(`/clothes/${clothesId}`);
  return { data, status };
};

//옷 정보 수정하는 함수
export const patchClothes = async (clothesId, clothesData) => {
  const { data, status } = await authClientInstance.patch(`/clothes/${clothesId}`, clothesData);
  return { data, status };
};

//NFC로 상세조회
export const getClothesByNfc = async (nfcId) => {
  const { data, status } = await authClientInstance.get(`/clothes/nfc/${nfcId}`);
  return { data, status };
};