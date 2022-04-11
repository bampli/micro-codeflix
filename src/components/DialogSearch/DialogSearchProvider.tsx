import { useMemo, useState, useEffect } from "react";
import DialogSearchContext from "./DialogSearchContext";
import DialogSearch from ".";
import { useParams } from "react-router-dom";
import useIsSmallWindow from "../../hooks/useIsSmallWindow";
import { createBrowserHistory } from "history";

export const DialogSearchProvider: React.FunctionComponent = (props) => {
    const [open, setOpen] = useState(false);

    const history = createBrowserHistory();
    const { show_dialog_search, ...otherState } = useParams() || {};
    
    console.log("HISTORY", history);
    console.log(`history.location.state: ${history.location.state}`);
    console.log(`show_dialog_search: ${show_dialog_search}`);
    console.log(`otherState: ${otherState}`);

    const isSmallWindow = useIsSmallWindow();

    const actions = useMemo(() => ({
        show: () => setOpen(true),
        hide: () => setOpen(false),
    }), []);

    useEffect(() => {
        if (open && !show_dialog_search) {
            history.push(
                history.location,
                {
                    show_dialog_search: true,
                },
            );
        } else {
            if (open) {
                return;
            }
            history.replace(
                history.location,
                {
                    ...otherState,
                },
            );
        }
    }, [open, history, show_dialog_search, otherState]);

    useEffect(() => {
        const unregister = history.listen(({location, action}) => {
            if (action === "POP") {
                //const { show_dialog_search } = location.state || {};
                console.log("POP STATE", location.state);
                console.log("POP SHOW_DIALOG_SEARCH", show_dialog_search);
                show_dialog_search ? actions.show() : actions.hide();
            }
        });
        return () => {
            unregister();
        };
    }, [actions, history, show_dialog_search]);

    useEffect(() => {
        if (!isSmallWindow) {
            actions.hide();
        }
    }, [isSmallWindow, actions]);

    return (
        <DialogSearchContext.Provider value={actions}>
            {props.children}
            <DialogSearch open={open} />
        </DialogSearchContext.Provider>
    );
}