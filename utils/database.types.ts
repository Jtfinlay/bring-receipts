export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      chats: {
        Row: {
          created_at: string
          id: string
          match_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          match_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          match_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chats_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          created_at: string
          id: string
          matched_at: string | null
          updated_at: string
          user1_id: string | null
          user1_liked: boolean | null
          user2_id: string | null
          user2_liked: boolean | null
        }
        Insert: {
          created_at?: string
          id?: string
          matched_at?: string | null
          updated_at?: string
          user1_id?: string | null
          user1_liked?: boolean | null
          user2_id?: string | null
          user2_liked?: boolean | null
        }
        Update: {
          created_at?: string
          id?: string
          matched_at?: string | null
          updated_at?: string
          user1_id?: string | null
          user1_liked?: boolean | null
          user2_id?: string | null
          user2_liked?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_user1_id_fkey"
            columns: ["user1_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_user2_id_fkey"
            columns: ["user2_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          chat_id: string | null
          content: string
          created_at: string
          id: string
          sender_id: string | null
        }
        Insert: {
          chat_id?: string | null
          content: string
          created_at?: string
          id?: string
          sender_id?: string | null
        }
        Update: {
          chat_id?: string | null
          content?: string
          created_at?: string
          id?: string
          sender_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      plaid_items: {
        Row: {
          access_token: string
          created_at: string
          error: string | null
          id: string
          item_id: string
          last_sync: string | null
          status: string
          sync_cursor: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          error?: string | null
          id?: string
          item_id: string
          last_sync?: string | null
          status?: string
          sync_cursor?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          error?: string | null
          id?: string
          item_id?: string
          last_sync?: string | null
          status?: string
          sync_cursor?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "plaid_items_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          age: number | null
          bio: string | null
          categories: Database["public"]["Enums"]["user_category"][] | null
          created_at: string
          gender: string | null
          id: string
          interested_in: string[] | null
          is_admin: boolean | null
          name: string | null
          photos: string[] | null
          status: string | null
          updated_at: string
        }
        Insert: {
          age?: number | null
          bio?: string | null
          categories?: Database["public"]["Enums"]["user_category"][] | null
          created_at?: string
          gender?: string | null
          id?: string
          interested_in?: string[] | null
          is_admin?: boolean | null
          name?: string | null
          photos?: string[] | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          age?: number | null
          bio?: string | null
          categories?: Database["public"]["Enums"]["user_category"][] | null
          created_at?: string
          gender?: string | null
          id?: string
          interested_in?: string[] | null
          is_admin?: boolean | null
          name?: string | null
          photos?: string[] | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number | null
          category: string | null
          created_at: string
          id: string
          item_id: string
          merchant_name: string | null
          status: string
          transaction_date: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount?: number | null
          category?: string | null
          created_at?: string
          id: string
          item_id: string
          merchant_name?: string | null
          status?: string
          transaction_date?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number | null
          category?: string | null
          created_at?: string
          id?: string
          item_id?: string
          merchant_name?: string | null
          status?: string
          transaction_date?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "plaid_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
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
      user_category:
        | "DINING"
        | "FITNESS"
        | "SHOPPING"
        | "TRAVEL"
        | "ENTERTAINMENT"
        | "HEALTH"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      user_category: [
        "DINING",
        "FITNESS",
        "SHOPPING",
        "TRAVEL",
        "ENTERTAINMENT",
        "HEALTH",
      ],
    },
  },
} as const

