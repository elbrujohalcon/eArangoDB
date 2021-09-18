all: setup_db precommit show_cover

precommit: compile format run_type_checks run_tests

setup_db:
	docker-compose up -d

compile:
	rebar3 compile

format:
	rebar3 fmt

run_type_checks:
	rebar3 xref
	rebar3 gradualizer
	rebar3 dialyzer

run_tests:
	rebar3 ct --cover
	rebar3 eunit --cover

show_cover:
	rebar3 cover

report_cover:
	rebar3 codecov analyze
