export interface DairyPolicy {
  id: string;
  title: string;
  titleHi: string;
  shortDesc: string;
  shortDescHi: string;
  fullDesc: string;
  fullDescHi: string;
  category: 'order' | 'delivery' | 'payment' | 'trust';
  active: boolean;
  displayOrder: number;
}

export interface DairyProduct {
  id: string;
  name: string;
  nameHi: string;
  category: 'milk' | 'butter' | 'cold-drinks' | 'dairy' | 'beverages';
  categoryLabelHi: string;
  volume: string;
  price: number;
  inStock: boolean;
  badge?: string;
  badgeColor?: string;
  descriptionHi: string;
}

export interface FAQItem {
  id: string;
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
}

export interface WorkflowStep {
  step: number;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  actor: 'customer' | 'dairy' | 'delivery';
  detailItems: string[];
}
