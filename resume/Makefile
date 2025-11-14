# -------- variables you might tweak ----------
SRC      = resume_daniel_cardenas.md
OUTDIR   = output
NAME     = Daniel_Cardenas
TEMPLATE = templates/eisvogel.latex
META     = style.yaml
PFLAGS   = --template=$(TEMPLATE) --metadata-file=$(META) --pdf-engine=xelatex
# ---------------------------------------------

.PHONY: pdf docx html all clean

pdf:
	@mkdir -p $(OUTDIR)
	pandoc $(SRC) -o $(OUTDIR)/$(NAME).pdf $(PFLAGS)

docx:
	@mkdir -p $(OUTDIR)
	pandoc $(SRC) -o $(OUTDIR)/$(NAME).docx

html:
	@mkdir -p $(OUTDIR)
	pandoc $(SRC) -o $(OUTDIR)/$(NAME).html --standalone --css https://cdn.jsdelivr.net/npm/water.css@2/out/water.css

all: pdf docx html

clean:
	rm -rf $(OUTDIR)
