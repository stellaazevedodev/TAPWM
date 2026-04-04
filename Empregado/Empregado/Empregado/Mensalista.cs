using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Empregado
{
    internal class Mensalista : Empregado
    {
        public double SalarioMensal { get; set; }

        public override double SalarioBruto()
        {
            return SalarioMensal;
        }
        public Mensalista()
        {
            System.Windows.Forms.MessageBox.Show("Aqui é mensalista");
        }
        public Mensalista(int matx, string nome, DateTime datax, double salx)
        {
            this.NomeEmpregado = nome;
            this.Matricula = matx;
            this.DataEntradaEmpresa = datax;
            this.SalarioMensal = salx;
        }
    }
}