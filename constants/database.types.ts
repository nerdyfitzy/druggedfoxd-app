export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "Bookmarked Lessons": {
        Row: {
          id: number
          lessonId: number
          userId: string
        }
        Insert: {
          id?: number
          lessonId: number
          userId: string
        }
        Update: {
          id?: number
          lessonId?: number
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Bookmarked Lessons_lessonId_fkey"
            columns: ["lessonId"]
            isOneToOne: false
            referencedRelation: "Lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Bookmarked Lessons_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Lessons: {
        Row: {
          character: string
          date: string
          id: number
          link: string
          notes: string | null
          opponent: string
          player: string
          timestamped: boolean
        }
        Insert: {
          character: string
          date: string
          id?: number
          link: string
          notes?: string | null
          opponent: string
          player: string
          timestamped: boolean
        }
        Update: {
          character?: string
          date?: string
          id?: number
          link?: string
          notes?: string | null
          opponent?: string
          player?: string
          timestamped?: boolean
        }
        Relationships: []
      }
      "New Uploads": {
        Row: {
          id: number
          lessonId: number
        }
        Insert: {
          id?: number
          lessonId: number
        }
        Update: {
          id?: number
          lessonId?: number
        }
        Relationships: [
          {
            foreignKeyName: "New Uploads_lessonId_fkey"
            columns: ["lessonId"]
            isOneToOne: true
            referencedRelation: "Lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      "Recently Viewed": {
        Row: {
          createdAt: string | null
          id: number
          lessonId: number
          userId: string
        }
        Insert: {
          createdAt?: string | null
          id?: number
          lessonId: number
          userId: string
        }
        Update: {
          createdAt?: string | null
          id?: number
          lessonId?: number
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Recently Viewed_lessonId_fkey"
            columns: ["lessonId"]
            isOneToOne: false
            referencedRelation: "Lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Recently Viewed_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      "Watched Lessons": {
        Row: {
          id: number
          lessonId: number
          userId: string
        }
        Insert: {
          id?: number
          lessonId: number
          userId: string
        }
        Update: {
          id?: number
          lessonId?: number
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Watched Lessons_lessonId_fkey"
            columns: ["lessonId"]
            isOneToOne: false
            referencedRelation: "Lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Watched Lessons_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
