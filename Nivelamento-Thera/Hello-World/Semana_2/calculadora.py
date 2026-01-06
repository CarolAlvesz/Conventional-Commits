##importando bibliotecas
from tkinter import *
from tkinter import Tk

cor1 = "#3b3b3b" #preto
cor2 = "#dd7d10" #laranja
cor3 = "#ffffff" #branco

window = Tk()
window.title("Calculadora Simples")
window.geometry("400x500")

## Frames
frame_tela = Frame(window, width=400, height=100, bg=cor1)
frame_tela.grid (row=0, column=0)

frame_corpo = Frame(window, width=400, height=500)
frame_corpo.grid (row=1, column=0)



todos_valores = ''

## função entrada de valores
def entrada_valores(number):
  
  global todos_valores
  
  todos_valores = todos_valores + str(number) 

   ## passar o resultado para a tela
  valor_texto.set(todos_valores)

## função calcular valores
def calcular():
  global todos_valores         
  resultado = eval(todos_valores)

  valor_texto.set(str(resultado))

## função limpar tela
def limpar_tela():
  global todos_valores
  todos_valores = ''
  valor_texto.set('')


## label
valor_texto = StringVar()


app_label = Label(frame_tela, textvariable=valor_texto, width=20, height=3, padx=7, relief=FLAT, anchor="e", justify=RIGHT, font =("Ivy 25"), bg=cor1, fg=cor3)
app_label.place (x=0, y=0)



## botoes
b_1 = Button(frame_corpo, command= limpar_tela, text="C", width= 20, height=3, font =("Ivy 13 bold"), fg= cor3, bg= cor2, relief=RAISED, overrelief=RIDGE)
b_1.place(x=0, y=0)
b_2 = Button(frame_corpo, command=lambda: entrada_valores('%'), text="%", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_2.place(x=190, y=0)
b_3 = Button(frame_corpo, command= lambda: entrada_valores('/'), text="/", width=10, height=3, font =("Ivy 13 bold"), fg= cor3, bg= cor2, relief=RAISED, overrelief=RIDGE)
b_3.place(x=300, y=0)

b_4 = Button(frame_corpo, command= lambda: entrada_valores('7'),text="7", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_4.place(x=0, y=75)
b_5 = Button(frame_corpo, command= lambda: entrada_valores('8'), text='8', width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_5.place(x=100, y=75)
b_6 = Button(frame_corpo, command= lambda: entrada_valores('9'), text="9", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_6.place(x=200, y=75)
b_7 = Button(frame_corpo, command= lambda: entrada_valores('*'), text="*", width=10, height=3, font =("Ivy 13 bold"), fg= cor3, bg= cor2, relief=RAISED, overrelief=RIDGE)
b_7.place(x=300, y=75)

b_8 = Button(frame_corpo, command= lambda: entrada_valores('4'), text="4", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_8.place(x=0, y=150)
b_9 = Button(frame_corpo, command= lambda: entrada_valores('5'), text="5", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_9.place(x=100, y=150)     
b_10 = Button(frame_corpo, command= lambda: entrada_valores('6'), text="6", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_10.place(x=200, y=150)
b_11 = Button(frame_corpo, command= lambda: entrada_valores('-'), text="-", width=10, height=3, font =("Ivy 13 bold"), fg= cor3, bg= cor2, relief=RAISED, overrelief=RIDGE)
b_11.place(x=300, y=150)  

b_12 = Button(frame_corpo, command= lambda: entrada_valores('1'), text="1", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_12.place(x=0, y=225)
b_13 = Button(frame_corpo, command= lambda: entrada_valores('2'), text="2", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_13.place(x=100, y=225)            
b_14 = Button(frame_corpo, command= lambda: entrada_valores('3'), text="3", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_14.place(x=200, y=225)    
b_15 = Button(frame_corpo, command= lambda: entrada_valores('+'), text="+", width=10, height=3, font =("Ivy 13 bold"), fg= cor3, bg= cor2, relief=RAISED, overrelief=RIDGE)
b_15.place(x=300, y=225)        

b_16 = Button(frame_corpo, command= lambda: entrada_valores('0'), text="0", width=18, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_16.place(x=0, y=300)              
b_17 = Button(frame_corpo, command= lambda: entrada_valores('.'), text=".", width=10, height=3, font =("Ivy 13 bold"), relief=RAISED, overrelief=RIDGE)
b_17.place(x=200, y=300)            
b_18 = Button(frame_corpo, command= calcular,  text='=', width=10, height=3, font =("Ivy 13 bold"), fg= cor3, bg= cor2, relief=RAISED, overrelief=RIDGE)         
b_18.place(x=300, y=300)    



window.mainloop()

