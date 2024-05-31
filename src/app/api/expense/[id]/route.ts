import {NextRequest, NextResponse} from "next/server";
import Expense from "@/lib/db/models/expense";

export async function PATCH(req: NextRequest, route: { params: { id: string } }) {
    const body = await req.json();
    const id = route.params.id;
    try {
        const expense = await Expense.findById(id);

        if (!expense) {
            return NextResponse.json({
                error: true,
                message: `No se encontro un registro con el id: ${id}`,
            })
        }

        const updatedExpense = await expense.updateOne(body);
        if (updatedExpense.acknowledged) {
            return NextResponse.json({
                message: 'Se actualizo el registro con exito'
            });
        } else {
            return NextResponse.json({
                error: true,
                message: 'Ocurrio un error al actualizar el registro!'
            })
        }
    } catch (e) {
        console.log(e)
    }
}

export async function DELETE(req: NextRequest, route: { params: { id: string } }) {
    const id = route.params.id;

    try {
        const expense = await Expense.findById(id);

        if (!expense) {
            return NextResponse.json({
                error: true,
                message: `No se encontro un registro con el id: ${id}`,
            })
        }
        const deletedExpense = await expense.deleteOne({ id: id });
        if (deletedExpense.acknowledged) {
            return NextResponse.json({
                message: 'Se elimino el registro con exito'
            });
        } else {
            return NextResponse.json({
                error: true,
                message: 'Ocurrio un error al eliminar el registro!'
            })
        }
    } catch(e) {
        console.log(e);
    }
}
