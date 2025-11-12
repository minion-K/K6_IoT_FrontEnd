// 예약 관련 API 호출 메서드 작성(비동기 함수)

import { publicApi } from "./axiosInstance";

export interface ReservationDto {
  id: number;         // 예약 고유 PK
  truckId: number;    // 가게(트럭)고유 PK(FK)
  userId: number;     // 사용자 고유 PK(FK)
  date: string;       // 오늘 날짜("2025-11-12")
  timeSlot: string;   // "10:00-11:00"
  status: string;     // "CONFIRMED | CANCELLED"
}

export const getAllReservations = async (truckId: number): Promise<ReservationDto[]> => {
  try {
    const res = await publicApi.get(`/trucks/${truckId}/reservation`);
  
    return res.data.data as ReservationDto[];
  } catch(e) {
    console.error("getAllReservations Error: ", e);
    return [];
  }
}

export const getReservation = async (truckId: number, reservationId: number): Promise<ReservationDto | null> => {
  try {
    const res = await publicApi.get(`/trucks/${truckId}/reservations/${reservationId}`);
  
    return res.data.data as ReservationDto;
  } catch(e) {
    console.error("getReservation error: ", e);
    return null;
  }
}