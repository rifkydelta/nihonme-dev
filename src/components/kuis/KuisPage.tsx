import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { KuisType } from './types';
import KuisSelector from './KuisSelector';
import Kuis from './Kuis';

const KuisPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [selectedKuis, setSelectedKuis] = useState<KuisType | null>(null);

  useEffect(() => {
    if (type && ['hiragana', 'katakana', 'kosakata'].includes(type)) {
      setSelectedKuis(type as KuisType);
    }
  }, [type]);

  const handleFinish = (score: number) => {
    setSelectedKuis(null);
    navigate('/kuis');
  };

  const handleSelectKuis = (type: KuisType) => {
    setSelectedKuis(type);
    navigate(`/kuis/${type}`);
  };

  const handleBack = () => {
    setSelectedKuis(null);
    navigate('/kuis');
  };

  if (selectedKuis) {
    return (
      <Kuis
        kuisType={selectedKuis}
        onFinish={handleFinish}
        onBack={handleBack}
      />
    );
  }

  return <KuisSelector onSelectKuis={handleSelectKuis} />;
};

export default KuisPage; 