import ProjectCard from './ProjectCard';
import TicTacToe from '../assets/tic-tac-toe.png';
import InvestmentCalculator from '../assets/investment-calculator.png';

export default function ProjectCards() {
  return (
    <section id="project-cards">
      <div className="w-9/12 h-full flex flex-row mt-24 gap-10 mx-auto">
        <ProjectCard 
          imageSource={TicTacToe}
          title="Tic-Tac-Toe"
          subtitle="test text"
          link="https://kendrickelifritz21.github.io/tic-tac-toe/" />
        <ProjectCard 
          imageSource={InvestmentCalculator}
          title="Investment Calculator"
          subtitle="Calculate the growth of an investment by giving some initial parameters."
          link="https://kendrickelifritz21.github.io/investment-calculator/" />
        <ProjectCard 
          imageSource={TicTacToe}
          title="Tic-Tac-Toe"
          subtitle="aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa aaaa "
          link="https://kendrickelifritz21.github.io/tic-tac-toe/" />
      </div>
    </section>
  )
}