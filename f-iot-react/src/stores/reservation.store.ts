// 예약/주문 관련 상태 (도메인 상태)
// - 푸드트럭 예약/주문 같은 실제 비즈니스 로직에 대한 상태
// - 특정 가게의 예약 내역을 불러오고 선택한 가게과 타임슬롯을 관리

import { getAllReservations } from "@/apis/reservationApi";
import { create } from "zustand";

//& 원산지) types 폴더
export interface Reservation {
  id: number;         // 예약 고유 PK
  truckId: number;    // 가게(트럭)고유 PK(FK)
  userId: number;     // 사용자 고유 PK(FK)
  date: string;       // 오늘 날짜("2025-11-12")
  timeSlot: string;   // "10:00-11:00"
  status: string;     // "CONFIRMED | CANCELLED"
}

// 스토어 내부의 객체 타입
interface ReservationState {
  selectedTruckId: number | null;
  selectedTimeSlot: string | null;
  reservationList: Reservation[];

  fetchReservations: (truckId: number) => Promise<void>;
  clearSelection: () => void;
}

// 스토어 생성
export const useReservationStore = create<ReservationState>((set) => ({
  selectedTruckId: null,
  selectedTimeSlot: null,
  reservationList: [],

  fetchReservations: async (truckId) => {
    const reservations = await getAllReservations(truckId);
    set({reservationList: reservations})
  },
  clearSelection: () => set({selectedTruckId: null, selectedTimeSlot: null})
}));