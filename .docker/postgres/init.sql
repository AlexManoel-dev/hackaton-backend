\c pump

CREATE TABLE pumps (
  ID SERIAL PRIMARY KEY,
  NomeModelo VARCHAR(512) NOT NULL,
  CodigoModelo VARCHAR(64),
  Fabricante VARCHAR(64),
  Garantia DATE,
  LocalOrigem VARCHAR(32),
  PressaoMin REAL,
  PressaoMax REAL,
  TempMin REAL,
  TempMax REAL,
  NPSHmin REAL,
  altura_geometrica REAL,
  Head_drop_loss REAL
);

CREATE TABLE coeficientes (
  ID SERIAL PRIMARY KEY,
  Formula VARCHAR(512),
  Compound_Name VARCHAR(512),
  ConstantA DOUBLE PRECISION,
  ConstantB DOUBLE PRECISION,
  ConstantC DOUBLE PRECISION,
  TMIN INT,
  TMAX INT
);

INSERT INTO coeficientes (Formula, Compound_Name, ConstantA, ConstantB, ConstantC, TMIN, TMAX) VALUES
  ('H2O', 'Água (pura ou de processo)', 8.07131, 1730.63, 233.426, 1, 100),
  ('H2O', 'Água gelada', 8.07131, 1730.63, 233.426, 1, 5),
  ('H2O', 'Água aquecida', 8.07131, 1730.63, 233.426, 80, 100),
  ('Óleo', 'Óleo hidráulico', 6.11132, 1500.60, 215.750, 20, 150),
  ('Óleo', 'Óleo de motor', 7.10123, 1600.50, 220.500, 30, 120),
  ('Óleo', 'Óleo de refrigeração', 7.21234, 1620.45, 225.480, 10, 110),
  ('Óleo', 'Óleo térmico', 7.45111, 1750.20, 230.100, 50, 200),
  ('C2H6O2', 'Etilenoglicol', 9.31245, 1800.50, 245.300, -5, 90),
  ('C3H8O2', 'Propileno glicol', 7.65432, 1600.75, 235.400, -10, 80),
  ('C3H8O2 + H2O', 'Mistura de glicol e água', 8.12345, 1720.80, 240.500, -10, 70),
  ('C2H5OH', 'Álcool etílico', 6.54321, 1500.90, 220.250, 0, 90),
  ('C3H8OH', 'Álcool isopropílico', 7.23145, 1580.60, 225.200, 10, 90),
  ('NH3', 'Amônia líquida', 8.91234, 1850.70, 250.600, -30, 50),
  ('CH3COOH', 'Ácido acético', 7.65432, 1720.80, 240.500, 10, 120),
  ('NaCl', 'Solução de cloreto de sódio', 5.12345, 1450.60, 210.700, 0, 80),
  ('H2O + NaCl', 'Água salgada', 8.01123, 1700.90, 230.300, 5, 100),
  ('(NH2)2CO', 'Solução de ureia', 6.21123, 1600.45, 215.400, 10, 90),
  ('H2O (g)', 'Vapor de água', 8.07131, 1730.63, 233.426, 100, 200);